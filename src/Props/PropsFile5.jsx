import React from 'react'
import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { ClipboardCopy, Clipboard } from 'lucide-react';

function PropsFile5() {
    const [copied, setcopied] = useState(false);
    const copycode = () => {
        navigator.clipboard.writeText(codestring);
        setcopied(true);
        setTimeout(() => setcopied(false), 2000);
    }

    const codestring = `
    const Content = ({ children }) => {
  return (
    <div className="border m-3 p-3 flex flex-wrap ">
      <div className="text-pink-400">

        {children}
      </div>
    </div>
  );
};

export default Content;
    `
    return (
        <div className='relative p-2'>
            <button
                onClick={copycode}
                className="absolute top-2 right-2 bg-gray-500 text-white px-3 py-1 rounded flex items-center gap-2 text-sm hover:bg-gray-700  "
            >
                {copied ? <ClipboardCopy /> : <Clipboard />}
                {copied ? "Copied!" : "Copy"}
            </button>
            <SyntaxHighlighter
                language='javascript'
                style={oneDark}
                showLineNumbers
            >
                {codestring}
            </SyntaxHighlighter>
        </div>
    )
}

export default PropsFile5