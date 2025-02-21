


import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula} from 'react-syntax-highlighter/dist/cjs/styles/prism';
 

const CodeBox = ({ code }) => {
  return (
   <>
     <div className='xl:mt-8 xl:h-fit'>
      <SyntaxHighlighter language="arduino" showLineNumbers  style={dracula}>
        {code}
      </SyntaxHighlighter>
      </div>
      </>
  );
};

export default CodeBox;
