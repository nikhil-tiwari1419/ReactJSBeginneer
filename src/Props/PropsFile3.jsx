import React from "react";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { ClipboardCopy, Clipboard } from 'lucide-react';
function Props3() {
  const [copied, setcopied] = useState(false);
  const copycode = () => {
    navigator.clipboard.writeText(codeString);
    setcopied(true);
    setTimeout(() => setcopied(false), 2000);
  }
  const codeString = `
// Parent Component where props are passed to child component

           import React from 'react'
import { Ellipsis, Hash, MailCheck, TabletSmartphone, ChevronRight, MapPin } from 'lucide-react';
function Card(props) {
  return (
    <div className='p-7 flex flex-wrap'>
      <div className='border  bg-gray-200 rounded-xl  border-none  w-85 p-2'>
        {/* upper ka part  */}
        <div className='flex justify-between items-center'>
          <button className='bg-green-700 text-white m-2 p-1 pr-5 pl-5 rounded-full'>Active</button>
          <span className='text-gray-700 mr-4 cursor-pointer'> <Ellipsis /> </span>
        </div>
        {/* middel ka part  */}
        <div className='flex flex-col items-center'>
          <img src={props.image} alt="images" className='object-cover h-40 w-40  rounded-full' />
          <h3>{props.Name}</h3>
        </div>
        <div className='border rounded w-full p-2 '>
          <h3 className='flex items-center gap-0.5 font-bold'><Hash size={20} />{props.CD_no}</h3>
          <h3 className='flex gap-0.5 items-center font-bold'><MailCheck size={20} /> {props.email_id}<MapPin size={20} />{props.location}</h3>
          <h3 className='flex gap-0.5 items-center font-bold'><TabletSmartphone size={20} />{props.phone}</h3>
        </div>
        <div className='flex mt-5'>
          <h4 className='text-gray-400 mr-2'>Joined</h4><h4 className=''> {props.date}</h4> <h4 className='ml-16 flex items-center underline'>view Details<ChevronRight size={15} /></h4>
        </div>
      </div>
    </div>
  )
}

export default Card

 


        // below is child component where props is accessed

function Props1() {
  const touristPlaces = [
    {
      name: "Eiffel Tower",
      img: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg",
      code_no: "FR001",
      email_id: "info@eiffeltower.fr",
      ph_no: "+33 892 70 12 39",
      date_of_founded: "31 Mar 1889",
      location: "Paris, France"
    }
  ];

  return (
    <div className='flex flex-wrap justify-center'>
      {touristPlaces.map((place, index) => (
        <Card
          key={index}
          image={place.img}
          Name={place.name}
          CD_no={place.code_no}
          email_id={place.email_id}
          phone={place.ph_no}
          date={place.date_of_founded}
          location={place.location}
        />
      ))}
    </div>
  );
}
`;

  return (

    <div className="relative pt-2">
      <button
        onClick={copycode}
        className="absolute top-2 right-2 bg-gray-500 text-white px-3 py-1 rounded flex items-center gap-2 text-sm hover:bg-gray-700 "
      >
        {copied ? <ClipboardCopy /> : <Clipboard />}
        {copied ? "Copied!" : "Copy"}
      </button>
      <div className=" max-h-[320px] overflow-y-auto rounded">

        <SyntaxHighlighter
          language="javascript"
          style={oneDark}
          showLineNumbers
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
    </div>

  )
}
export default Props3;