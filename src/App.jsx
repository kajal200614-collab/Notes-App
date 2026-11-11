import React, { useState } from 'react'
import {X} from 'lucide-react'

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState([])
  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault();
  
    const copyTask=[...task];

    copyTask.push({title,details})
    setTask(copyTask)

    setTitle('')
    setDetails('')
  }

  const deleteNote=(idx)=>{
    const copyTask = [...task]
    copyTask.splice(idx,1)
    setTask(copyTask)
  }

  return (
    <div className='h-screen lg:flex bg-black text-white'>

      <form onSubmit={(e)=>{
          submitHandler(e)
        }} className='flex items-start lg:w-1/2 flex-col p-10 gap-4'>

          <h1 className='text-3xl font-bold '>Add Notes</h1>

          <input
          type="text"
          placeholder="Enter Notes Heading"
          className="px-5 outline-none font-medium w-full py-2 border-2 rounded"
          value={title}
          onChange={(e)=>
            setTitle(e.target.value)
          }
        />

        <textarea
          type="text"
          className="px-5 flex items-start flex-row font-medium outline-none w-full h-20 py-2 border-2 rounded"
          placeholder="Enter Notes Description"
          value={details}
          onChange={(e)=>
            setDetails(e.target.value)
          }
        />

        <button 
        className='bg-white active:bg-gray-400 outline-none w-full font-medium text-black px-5 py-2 rounded'
        >Add Note
        </button>

      </form>

      <div className='lg:w-1/2 p-10 lg:border-l'>
      <h1 className='text-3xl font-bold '>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 mt-5 h-[90%] overflow-auto'> 
          {task.map(function(elem,idx){

            return <div key={idx} className="relative flex justify-between flex-col items-start h-80 w-60 rounded-xl py-4 px-6 bg-[url('https://static.vecteezy.com/system/resources/previews/066/640/765/non_2x/cute-page-template-for-notebook-or-diary-in-pink-color-with-rainbow-and-bow-vector.jpg')] bg-cover p-4 text-black">
             <h3 className='leading-tight text-xl font-bold break-all'>{elem.title}</h3>
             <p className='leading-tight font-semibold text-xs text-gray-500 break-all'>{elem.details}</p>
             <button onClick={() => {
              deleteNote(idx)
             }} className='w-full cursor-pointer active:scale-95 bg-black text-white py-1 text-xs rounded font-bold'>Delete Note</button>

            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App
