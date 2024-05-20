import React from 'react'
import { Link } from 'react-router-dom'

const events=[
  {
    "id":1,
    'image': 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'name' : 'WEB DEVELOPMENT WORKSHOP',
    'date' : 'DATE : 24-05-2024',
    'link' : 'https://workspace.google.com/intl/en_in/lp/forms/',
    
  },
  {
    "id":2,
    'image': 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'name' : 'APP DEVELOPMENT WORKSHOP',
    'date' : 'DATE : 25-05-2024',
    'link' : 'https://workspace.google.com/intl/en_in/lp/forms/',
    
  },
  {
    "id":3,
    'image': 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'name' : 'UIUX DEVELOPMENT WORKSHOP',
    'date' : 'DATE : 26-05-2024',
    'link' : 'https://workspace.google.com/intl/en_in/lp/forms/',
    
  },
]

function Events() {
  return (
    <div>
      <div name='event' className='flex justify-center py-20'>
      <div className='flex justify-center items-center w-[400px] h-[60px] rounded-full bg-black'>
        <h1 className='font-bold text-4xl tracking-wide text-white'>EVENTS</h1>
      </div>
      </div>
      <div className='flex justify-center gap-36'>
       {events.map((event)=>
        <div>
        <div className='w-[350px] h-[450px] bg-[#DABDFF] rounded-3xl border-2 border-purple-500 shadow-lg flex flex-col justify-center align-middle items-center gap-3'>
          <div className='w-[300px] h-[200px] '> 
           <img className='object-cover rounded-2xl border-2  border-purple-700 grayscale shadow-xl' src={event.image} alt="" />
          </div>
          <div className='items-center ' >
            <h1 className='text-center py-4 font-bold text-2xl'>{event.name}</h1>
            <h1 className='text-center font-bold pt-3 text-xl'>{event.date}</h1>
            <div className='flex justify-center py-3'>
            <a href={event.link} target='blank'>
            <button className='bg-purple-800 rounded-full text-white px-4 py-2 font-semibold text-lg '>Join Now !</button>
            </a>
            </div>
        </div>
        </div>
        </div>
      )}  
      </div>     
    </div>
  )
}

export default Events