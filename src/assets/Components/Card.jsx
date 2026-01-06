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
