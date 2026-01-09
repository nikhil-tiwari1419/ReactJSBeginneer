import React from 'react'
import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { ClipboardCopy, Clipboard } from 'lucide-react';
function Props4() {

    const [copied, setcopied] = useState(false);
    const copycode = () => {
        navigator.clipboard.writeText(codeStirng);
        setcopied(true);
        setTimeout(() => setcopied(false), 2000);
    }

    const codeStirng = ` ABOUVE UI is exact UI of this below geven code 
          //this code is using to explain Node Abstraction concept in react
      // this jFile {jsonFile} contains data related to Node Abstraction concept

    {mode === "Node" &&
                    jFile.map((item, index) => (
                        <div
                            key={index}
                            className="
                bg-white rounded-lg shadow
                p-3 sm:p-4 md:p-6
                mb-4
              "
                        >
                            <h2 className="text-base sm:text-lg md:text-xl font-bold text-purple-600">
                                {item.concept}
                            </h2>

                            <p className="mt-2 text-sm sm:text-base text-gray-700">
                                {item.definition}
                            </p>

                            <h3 className="mt-4 font-semibold text-red-600 text-sm sm:text-base">
                                Problem Without Abstraction
                            </h3>

                            <p className="text-sm sm:text-base">
                                {item.problemWithoutAbstraction.description}
                            </p>

                            <ul className="list-disc ml-4 sm:ml-6 text-sm sm:text-base">
                                {item.problemWithoutAbstraction.issues.map((issue, i) => (
                                    <li key={i}>{issue}</li>
                                ))}
                            </ul>

                            <h3 className="mt-4 font-semibold text-green-600 text-sm sm:text-base">
                                Solution With Node Abstraction
                            </h3>

                            <p className="text-sm sm:text-base">
                                {item.solutionWithNodeAbstraction.description}
                            </p>

                            <ul className="list-disc ml-4 sm:ml-6 text-sm sm:text-base">
                                {item.solutionWithNodeAbstraction.benefits.map((b, i) => (
                                    <li key={i}>{b}</li>
                                ))}
                            </ul>

                            <h3 className="mt-4 font-semibold text-blue-600 text-sm sm:text-base">
                                Abstracted Component
                            </h3>

                            <p className="text-sm sm:text-base">
                                Component Name: <strong>{item.abstractedNode.componentName}</strong>
                            </p>

                            <ul className="list-disc ml-4 sm:ml-6 text-sm sm:text-base">
                                {item.abstractedNode.responsibility.map((r, i) => (
                                    <li key={i}>{r}</li>
                                ))}
                            </ul>
                            </div>
                            ))}
                          `;

    return (
        <div className='relative pt-2'>
            <button
                onClick={copycode}
                className="absolute top-2 right-2 bg-gray-500 text-white px-3 py-1 rounded flex items-center gap-2 text-sm hover:bg-gray-700  "
            >
                {copied ? <ClipboardCopy /> : <Clipboard />}
                {copied ? "Copied!" : "Copy"}
            </button>
            <div className='rounded max-h-[420px]  overflow-y-auto '>
                <SyntaxHighlighter
                    language="javascript"
                    style={oneDark}
                    showLineNumbers
                >
                    {codeStirng}
                </SyntaxHighlighter>
            </div>
        </div>
    )
}

export default Props4;

