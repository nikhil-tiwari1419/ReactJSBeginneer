import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
function Props2() {
  const codeString = `
import Content from '../container/Content'
function NodeAbstraction() {
  return (
  <Content>
        <h1 className='text-xl font-bold'>Props2 Component</h1>
        <p>
          This is the Props2 component which demonstrates passing and using props in React.
        </p>
      </Content>
      )}
      export default NodeAbstraction;`;
  return (
    <div>
      <SyntaxHighlighter language="javascript" style={oneDark} showLineNumbers>
        {codeString}
      </SyntaxHighlighter>
    </div>
  )
}

export default Props2