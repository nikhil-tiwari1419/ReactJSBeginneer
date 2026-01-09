import React, { useState } from 'react';
import jsonFiles from './json/Files.json';
import jFile from './json/Files1.json';
import File2 from './json/Files2.json';
import Node from './Props/Props2';
import Props from './Props/PropsFile3';
import PropS from './Props/PropsFile2';
import Prop from './Props/PropsFile4';
import Pro from './Props/PropsFile5';
import Prrr from './Props/PropsFiles6';

import { useNavigate } from 'react-router-dom';

function Home() {
    const navigation = useNavigate();
    const [mode, setMode] = useState("Props");
    const [showCode, setShowCode] = useState(false);

    return (
        <div
            className="
        min-h-screen bg-gray-200
        flex flex-col mx-auto w-full
        max-w-7xl
        px-3 sm:px-6 md:px-8
        pb-20
      "
        >
            {/* Heading */}
            <h1
                className="
          text-lg sm:text-xl md:text-2xl lg:text-3xl
          font-bold text-center py-4
        "
            >
                React Fundamental + Components Structure
            </h1>

            {/* Mode Buttons */}
            <div
                className="
          border rounded-md
          m-2 p-2
          flex flex-col sm:flex-row
          gap-2 sm:gap-4
          overflow-x-auto no-scrollbar
        "
            >
                <button
                    onClick={() => setMode("Props")}
                    className="
            bg-blue-200 px-4 py-2
            text-sm sm:text-base
            rounded cursor-pointer
            hover:bg-blue-100 transition
            whitespace-nowrap
          "
                >
                    Props Management
                </button>

                <button
                    onClick={() => setMode("Node")}
                    className="
            bg-blue-200 px-4 py-2
            text-sm sm:text-base
            rounded cursor-pointer
            hover:bg-blue-100 transition
            whitespace-nowrap
          "
                >
                    Node Abstraction
                </button>

                <button
                    onClick={() => setMode("Context")}
                    className="
            bg-blue-200 px-4 py-2
            text-sm sm:text-base
            rounded cursor-pointer
            hover:bg-blue-100 transition
            whitespace-nowrap
          "
                >
                    Context Management
                </button>
                <button
                    onClick={() => setMode("Context")}
                    className="
            bg-blue-200 px-4 py-2
            text-sm sm:text-base
            rounded cursor-pointer
            hover:bg-blue-100 transition
            whitespace-nowrap
          "
                >
                    Redux tookit
                </button>
                <button
                    onClick={() => setMode("Context")}
                    className="
            bg-blue-200 px-4 py-2
            text-sm sm:text-base
            rounded cursor-pointer
            hover:bg-blue-100 transition
            whitespace-nowrap
          "
                >
                    SDchean
                </button>
            </div>



            {/* Content Section */}
            <div
                className="
          bg-gray-200 text-black
          mx-1 sm:mx-3
          p-2 sm:p-4
          rounded mt-6
          h-full overflow-y-auto no-scrollbar
        "
            >
                {/* Props Mode */}
                {mode === "Props" &&
                    jsonFiles.map((item, index) => (
                        <div
                            key={index}
                            className="
                bg-white rounded-lg shadow
                p-3 sm:p-4 md:p-6
                mb-4
              "
                        >
                            <h2 className="text-base sm:text-lg md:text-xl font-bold text-blue-600">
                                Component: {item.component}
                            </h2>

                            <p className="text-sm sm:text-base text-gray-600">
                                Type: {item.type}
                            </p>

                            <h3 className="mt-3 font-semibold text-sm sm:text-base">
                                Receives Props:
                            </h3>

                            <ul className="list-disc ml-4 sm:ml-6 text-sm sm:text-base">
                                {Object.entries(item.receivesProps).map(([key, value], i) => (
                                    <li key={i}>
                                        <strong>{key}</strong>: {value}
                                    </li>
                                ))}
                            </ul>

                            <h3 className="mt-3 font-semibold text-sm sm:text-base">
                                Usage Purpose:
                            </h3>

                            <ul className="list-disc ml-4 sm:ml-6 text-sm sm:text-base">
                                {item.usagePurpose.map((use, i) => (
                                    <li key={i}>{use}</li>
                                ))}
                            </ul>
                            <button
                                className="
                  mt-4 border
                  px-3 py-2 
                  text-sm sm:text-base
                  rounded cursor-pointer
                  w-full sm:w-auto
                "
                                onClick={() => navigation('/Props1')}
                            >
                                Props1 Demo
                            </button>
                            <button
                                className="
                  mt-4 border
                  px-3 py-2
                  text-sm sm:text-base
                  rounded cursor-pointer
                  w-full sm:w-auto
                "
                                onClick={() => setShowCode(!showCode)}
                            >
                                toggle code
                            </button>
                            {showCode && <Props />}


                        </div>
                    ))}

                {/* Node Mode */}
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

                            <button
                                onClick={() => setShowCode(!showCode)}
                                className="
                  mt-4 border
                  px-1 py-1
                  text-sm sm:text-base
                  rounded cursor-pointer
                  w-full sm:w-auto
                "
                            > toggle code

                            </button>
                            {showCode && <Prop />}
                            {showCode && <Pro />}
                            {showCode && <PropS />}
                            {showCode && <Node />}
                        </div>
                    ))}

                {/* Context Mode */}
                {mode === "Context" && (
                    <div className="space-y-4">
                        {File2.map((item, index) => (
                            <div
                                key={index}
                                className="
                  bg-white rounded-lg shadow
                  p-3 sm:p-4 md:p-6
                "
                            >
                                <h2 className="text-base sm:text-lg md:text-xl font-bold text-blue-600">
                                    {item.concept}
                                </h2>

                                <p className="mt-2 text-sm sm:text-base text-gray-700">
                                    {item.definition}
                                </p>

                                <ul className="list-disc ml-4 sm:ml-6 mt-3 text-sm sm:text-base">
                                    {item.whenToUse.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>
                                <button
                                    onClick={() => setShowCode(!showCode)}
                                    className="
                  mt-4 border
                  px-1 py-1
                  text-sm sm:text-base
                  rounded cursor-pointer
                  w-full sm:w-auto
                "
                                > toggle code

                                </button>
                                {showCode && <Prrr />}
                            </div>

                        ))}

                    </div>
                )}
            </div>
        </div>
    );
}


export default Home;

