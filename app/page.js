"use client"
import React from 'react'
import { useState } from 'react';

const page = () => {
  //const users = ["sujal","amit","ashish","aman","chaman"];
  const [task, settask] = useState("");
  const [todos, settodos] = useState([]);

  const addTask = () => {
    if (task===""){
      alert("please enter a task!");
      return;
    }
    settodos([...todos,task]);
    settask("");
  }
  const deletetask = (index) => {
    const updated = todos.filter((_,i)=> i !== index)//agar currentelement use nii krna then _ ek convention h jisme humein sirf element ka index milta h element nhi.
    settodos(updated);
  }
    return (
    <>
    <div className='min-h-[100vh] w-full bg-red-900 font-[gilroy] overflow-hidden selection:white'>
      <h1 className='text-center text-[100px] font-bold text-white mt-[2%]'>TODO!
      </h1>
       {/* {users.map((user,index)=>( 
           <h1 className='text-white text-[30px] font-extrabold font-[gilroy]'>Hello,{user} {index}</h1>

        ))}*/}
        <div className='h-100 w-160 border-[1px] mx-auto border-white p-3'>
          <input type='text' onChange={(e)=>
            settask(e.target.value)
          } value={task} className='w-80 h-10 rounded-[20px] border-[1px] border-white mt-[2%] text-white font-[gilroy] text-xl ml-25 outline-none'></input>
          <button onClick={()=>{
            addTask();
          }} className='border-[1px] border-white rounded-[20px] ml-[2%] mt-[2%] w-[20%] bg-white cursor-pointer'>ADD TASK!</button>
          <ul className='min-h-[20vh] w-[80%] ml-[10%] p-2 space-y-2'>
                {todos.map((todo,index)=>(
                  <li key={index} className='flex item-center justify-between font-extrabold text-[gilroy] text-white text-2xl bg-red-400 rounded-[20px] border-[1px] border-white p-3'>
              {todo}<button onClick={()=>{
                deletetask(index);
              }} className='p-1 w-[20%] rounded-[20px] border-[1px] border-white text-white font-[gilroy] text-sm outline-none'>DELETE</button>
            </li>
                ))}
          </ul>
        </div>
    </div>
    </>
  )
}

export default page
