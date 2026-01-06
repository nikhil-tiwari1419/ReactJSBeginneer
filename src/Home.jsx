import React from 'react'
import { useState } from 'react';
import jsonFiles from './json/Files.json';
import jFile from './json/Files1.json';
import File2 from './json/Files2.json';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigation = useNavigate();
    const [mode, setmode] = useState("Props");
    return (
        <div className='min-h-screen flex-col mx-auto w-full max-w-4xl flex bg-gray-200 pb-20'>

            <h1 className='text-2xl font-bold text-center p-4'>
                React Fundamental + Components Structure
            </h1>

            <div className='border overflow-x-auto no-scrollbar  rounded-md m-2 p-1 flex gap-3 items-center justify-between'>

                <button
                    onClick={() => setmode("Props")}
                    className='bg-blue-200  rounded cursor-pointer hover:bg-blue-100 transition'>
                    Props Management
                </button>

                <button
                    onClick={() => setmode("Node")}
                    className='bg-blue-200  rounded cursor-pointer hover:bg-blue-100 transition'>
                    Node Abstraction
                </button>

                <button
                    onClick={() => setmode("Context")}
                    className='bg-blue-200  rounded cursor-pointer hover:bg-blue-100 transition'>
                    Context Management
                </button>

            </div>
            {/* setect between buttons  */}
            <div className='border bg-gray-200 text-black border-none  mx-3 p-2 rounded mt-10 h-full overflow-y-auto no-scrollbar'>

                {mode === "Props" &&
                    jsonFiles.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg p-4 mb-4 shadow"
                        >
                            <h2 className="text-xl font-bold text-blue-600">
                                Component: {item.component}
                            </h2>

                            <p className="text-gray-600">
                                Type: {item.type}
                            </p>

                            <h3 className="mt-3 font-semibold">Receives Props:</h3>
                            <ul className="list-disc ml-6">
                                {Object.entries(item.receivesProps).map(([key, value], i) => (
                                    <li key={i}>
                                        <strong>{key}</strong>: {value}
                                    </li>
                                ))}
                            </ul>

                            <h3 className="mt-3 font-semibold">Usage Purpose:</h3>
                            <ul className="list-disc ml-6">
                                {item.usagePurpose.map((use, i) => (
                                    <li key={i}>{use}</li>
                                ))}
                            </ul>
                            <button
                                className='cursor-pointer border m-2 p-1 rounded'
                                onClick={() => navigation('/Props1')}>Props1 demo
                            </button>

                        </div>
                    ))
                }

                {mode === "Node" &&
                    jFile.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg p-4 mb-4 shadow"
                        >
                            <h2 className="text-xl font-bold text-purple-600">
                                {item.concept}
                            </h2>

                            <p className="mt-2 text-gray-700">
                                {item.definition}
                            </p>

                            {/* Problem */}
                            <h3 className="mt-4 font-semibold text-red-600">
                                Problem Without Abstraction
                            </h3>
                            <p>{item.problemWithoutAbstraction.description}</p>
                            <ul className="list-disc ml-6">
                                {item.problemWithoutAbstraction.issues.map((issue, i) => (
                                    <li key={i}>{issue}</li>
                                ))}
                            </ul>

                            {/* Solution */}
                            <h3 className="mt-4 font-semibold text-green-600">
                                Solution With Node Abstraction
                            </h3>
                            <p>{item.solutionWithNodeAbstraction.description}</p>
                            <ul className="list-disc ml-6">
                                {item.solutionWithNodeAbstraction.benefits.map((b, i) => (
                                    <li key={i}>{b}</li>
                                ))}
                            </ul>

                            {/* Abstracted Node */}
                            <h3 className="mt-4 font-semibold text-blue-600">
                                Abstracted Component
                            </h3>
                            <p>
                                Component Name: <strong>{item.abstractedNode.componentName}</strong>
                            </p>
                            <ul className="list-disc ml-6">
                                {item.abstractedNode.responsibility.map((r, i) => (
                                    <li key={i}>{r}</li>
                                ))}
                            </ul>
                        </div>
                    ))
                }

                {mode === "Context" &&
                    <div className="space-y-4">
                        {File2.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white p-4 rounded-lg shadow"
                            >
                                <h2 className="text-xl font-bold text-blue-600">
                                    {item.concept}
                                </h2>

                                <p className="text-gray-700 mt-2">
                                    {item.definition}
                                </p>

                                <ul className="list-disc ml-6 mt-3">
                                    {item.whenToUse.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                }
            </div>
        </div >
    );
}

export default Home;
