// ApiKeyCallout.js or ApiKeyCallout.tsx if you are using TypeScript
import React from 'react';

const ApiKeyCallout = ({ apiKey }) => {
  return (
    <div className="bg-gray-100 px-4 rounded-md border border-gray-200 my-4">
      {apiKey 
        ? <>
            <h3 className='mt-6'>Try it out!</h3>
            <p>Your own sandbox secret key is included in the example here, so you can test it right away. Only you can see this value. Try it out!</p>
        </>
        : <>
            <p>In these docs, you'll find example responses for each API request.<br/>To test authentication using your own account data, <a href='https://my.rebill.com/login'>sign in</a>. Your sandbox secret key will be automatically included in this request so you can try it out.</p>
        </>}
    </div>
  );
};

export default ApiKeyCallout;
