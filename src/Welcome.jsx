import React from 'react'
import { MoveRight, CornerDownRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Welcome() {
    const navigation = useNavigate();
    return (
        <div className='bg-gray-200  min-h-screen items-center justify-center flex flex-col p-2'>

            <img className='h-30' src="/react.svg" alt="react svg" />
            <h1 className='text-2xl p-10 font-bold'>
                Welcome to react js bundeler !
            </h1>
            <button
                onClick={() => navigation("/Home")}
                className='border p-2 rounded '>
                <CornerDownRight size={30} />
            </button>
            <footer className='fixed m-2 bottom-0'>
                Connect with me <a href="http://linkedin.com/in/nikhil-tiwari-53743b339" target="_blank" rel="noopener noreferrer"
                    className='text-blue-800'
                > linkedin  </a>
            </footer> <a href="http://" ></a>
        </div>
    )
}

export default Welcome;