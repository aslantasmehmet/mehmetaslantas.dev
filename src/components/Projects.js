import React from 'react'

export default function Projects() {
  return (
    <div className='bg-white w-full h-full'>
       <div className="text-xl m-4 translate-y-0 sm:text-3xl  text-center text-black ">
        <span className=" pl-2 select-none border-l-4 border-b-4 border-purple-500">
          Projects
        </span>
      </div>


      {/* Projects */}

      <div className='grid grid-cols-4 gap-4 container mx-auto mt-9 mb-9 '>
        <div className='mb-4 border w-72 h-full mr-2 shadow hover:-translate-y-1 hover:scale-110  duration-300 hover:text-purple-500 '>
          <div className='flex flex-col'>
            <img src='https://soumyajit.vercel.app/static/media/chatify.7206044e0b5cdad44726.png'/>
            <p className='mx-2 mt-2 text-black text-left font-semibold'>Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages.</p>
            <div className='flex flex-row ml-16 mt-3'>
              <button className='border bg-purple-500 text-white font-semibold mr-2 px-2 py-2 shadow hover:-translate-y-1 hover:scale-110  duration-300 '>GitHub</button>
              <button className='border bg-purple-500 text-white font-semibold px-2 py-2 hover:-translate-y-1 hover:scale-110  duration-300'>Demo</button>
            </div>
          </div>
        </div>
        <div className='mb-4 border w-72 h-full mr-2 shadow hover:-translate-y-1 hover:scale-110  duration-300 hover:text-purple-500'>
          <div className='flex flex-col'>
            <img src='https://soumyajit.vercel.app/static/media/blog.fb8ab7f271a937d5fc01.png'/>
            <p className='mx-2 mt-2 text-black text-left font-semibold'>Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages.</p>
            <div className='flex flex-row ml-16 mt-3'>
              <button className='border bg-purple-500 text-white font-semibold mr-2 px-2 py-2 shadow hover:-translate-y-1 hover:scale-110  duration-300 '>GitHub</button>
              <button className='border bg-purple-500 text-white font-semibold px-2 py-2 hover:-translate-y-1 hover:scale-110  duration-300'>Demo</button>
            </div>
          </div>
        </div>
        <div className='mb-4 border w-72 h-full mr-2 shadow hover:-translate-y-1 hover:scale-110  duration-300 hover:text-purple-500'>
          <div flex flex-col>
            <img src='https://soumyajit.vercel.app/static/media/codeEditor.1b585492490c8c1cace9.png'/>
            <p className='mx-2 mt-2 text-black text-left font-semibold'>Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages.</p>
            <div className='flex flex-row ml-16 mt-3'>
              <button className='border bg-purple-500 text-white font-semibold mr-2 px-2 py-2 shadow hover:-translate-y-1 hover:scale-110  duration-300 '>GitHub</button>
              <button className='border bg-purple-500 text-white font-semibold px-2 py-2 hover:-translate-y-1 hover:scale-110  duration-300'>Demo</button>
            </div>
          </div>
        </div>
        <div className='mb-4 border w-72 h-full shadow hover:-translate-y-1 hover:scale-110  duration-300 hover:text-purple-500'>
          <div className='flex flex-col'> 
          <img src='https://soumyajit.vercel.app/static/media/codeEditor.1b585492490c8c1cace9.png'/>
          <p className='mx-2 mt-2 text-black text-left font-semibold'>Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages.</p>
            <div className='flex flex-row ml-16 mt-3'>
              <button className='border bg-purple-500 text-white font-semibold mr-2 px-2 py-2 shadow hover:-translate-y-1 hover:scale-110  duration-300 '>GitHub</button>
              <button className='border bg-purple-500 text-white font-semibold px-2 py-2 hover:-translate-y-1 hover:scale-110  duration-300'>Demo</button>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}
