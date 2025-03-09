'use client';
import React, { useState } from 'react';
import { JSONTree } from 'react-json-tree';
// import dynamic from 'next/dynamic';
// const DynamicReactJson = dynamic(() => import('react-json-view'), { ssr: false });


interface ApiRunnerProps {
  curlCommand: string;
}

interface ApiResponse {
    message: string;
    data: any; // ??
  }

export const ApiRunner: React.FC<ApiRunnerProps> = ({ curlCommand }) => {
  const [response, setResponse] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const executeRequest = async () => {
    setLoading(true);
    setError(null);
    try {
      const parsedResponse = await fetch('/api/parseCurl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ curlCommand }),
      });

      if (!parsedResponse.ok) {
        throw new Error('Failed to parse cURL command');
      }

      const parsedCurl = await parsedResponse.json();
      const { method, url, headers, body } = JSON.parse(parsedCurl);

      // Execute the API request using parsed cURL data
      const apiResponse = await fetch(url, { method, headers: new Headers(headers), body });
      const jsonResponse = await apiResponse.json();
      setResponse(jsonResponse);
    } catch (err) {
      setError(`Failed to execute request: ${err instanceof Error ? err.message : String(err)}`);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div>
      <div className="flex justify-end">
        <button onClick={executeRequest} disabled={loading} className="relative inline-flex items-center rounded-md bg-slate-100 px-3 py-1 text-xs font-medium text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10">Run</button>
      </div>
      {loading && <p className="text-sm text-gray-300 font-mono">Running...</p>}
      <div className="bg-zinc-900  dark:bg-zinc-800 p-4 rounded-lg">
      {response && (
        // <DynamicReactJson style={{ backgroundColor: 'transparent', overflowX: 'auto' }} src={response} theme="tomorrow" collapsed={false} />
        <JSONTree data={response} theme="tomorrow" />
      )}
      </div>
      {error && <p className="text-red-500">Error: {error}</p>}
    </div>
  );

};

export default ApiRunner;
