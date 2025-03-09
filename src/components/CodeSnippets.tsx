'use client'

import React, { createElement, useEffect, useState } from 'react'
//import { Tab } from '@headlessui/react';
import json2md from 'json2md'
import useCurlCommand from '../hooks/useCurlCommand'
import ApiKeyCallout from './ApiKeyCallout'
import { ApiRunner } from './ApiRunner'
import { CodeGroup } from './Code'
import { ResultBox } from './ResultBox'
import { useUserContext } from './context/UserContext'
import axios from 'axios'

interface Snippet {
  language: string
  code: string
}

interface CodeSnippetsProps {
  curlCommand: string
  title: string
  method: string
  path: string
  apiRunner: boolean
}

const CodeSnippets: React.FC<CodeSnippetsProps> = ({
  curlCommand,
  title,
  method,
  path,
  apiRunner,
}) => {
  const [snippets, setSnippets] = useState<Snippet[]>([])
  const [loading, setLoading] = useState(true)
  const userData = useUserContext()

  const convertedCurlCommand = useCurlCommand(curlCommand)

  const defaultCurl = {
    language: 'bash',
    code: convertedCurlCommand,
  }

    useEffect(() => {
      axios.post('/api/convertCurl', { curl: convertedCurlCommand })
        .then((response) => { 
          setSnippets(response.data as any)
        })
        .catch((error) => console.error('Error:', error))
        .finally(() => setLoading(false))
    }, [convertedCurlCommand])

  if (loading || snippets.length === 0) {
    return (
      <CodeGroup title={title} tag={method} label={path}>
        {createElement(
          'Fragment',
          {
            key: `bash-default`,
            code: defaultCurl.code,
            language: defaultCurl.language,
          },
          json2md({
            code: {
              content: [defaultCurl.code],
            },
          })
            .replace('```', '')
            .replace('```', ''),
        )}
      </CodeGroup>
    )
  }

  return (
    <>
      <CodeGroup title={title} tag={method} label={path}>
        {snippets.length &&
          snippets.map((snippet, index) =>
            createElement(
              'Fragment',
              {
                key: `${snippet.language}-${index}`,
                code: snippet.code,
                language: snippet.language,
              },
              json2md({
                code: {
                  content: [snippet.code],
                },
              })
                .replace('```', '')
                .replace('```', ''),
            ),
          )}
      </CodeGroup>

      {apiRunner ? (
        <>
          <ApiKeyCallout apiKey={userData?.secretKey} />
          <ResultBox>
            <ApiRunner curlCommand={convertedCurlCommand} />
          </ResultBox>
        </>
      ) : (
        <></>
      )}
    </>
  )
}

export default CodeSnippets
