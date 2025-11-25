// "use client"
// import React from 'react'
// import { useState } from 'react'

// const page = () => {
//   const [count, setcount] = useState(0);
//   const [mode, setmode] = useState(false);
//   function changeMode(){
//     setmode(!mode);
//   }
//   return (
//    <>
//    {mode?
//    (<div className='h-[100vh] w-[100%] bg-white text-black font-[gilroy] font-[gilroy] overflow-hidden'>
//     <h1 className='text-center text-[70px] font-bold text-black'>REACT PRACTICE!</h1>
//    <h1 className='text-[50px] font-semibold text-center text-black'>The count is {count}</h1>
//    <div className='flex items-center justify-between ml-[30%] mt-[5%] w-[40%]'>
//     <button onClick={()=>{
//     setcount(count+1);
//    }} className='w-[40%] p-[10px] rounded-[20px] bg-black text-white text-[15px] text-center cursor-pointer'>Update count!</button>
//    <button onClick={()=>{
//     changeMode();
//    }} className='w-[40%] p-[10px] rounded-[20px] bg-black text-white text-[15px] text-center cursor-pointer'>Change Mode</button>
//    </div>
//    </div>) :
//    (<div className='h-[100vh] w-[100%] bg-black text-white font-[gilroy] font-[gilroy] overflow-hidden'>
//     <h1 className='text-center text-[70px] font-bold text-white'>REACT PRACTICE!</h1>
//    <h1 className='text-[50px] font-semibold text-center text-white'>The count is {count}</h1>
//    <div className='flex items-center justify-between ml-[30%] mt-[5%] w-[40%]'>
//     <button onClick={()=>{
//     setcount(count+1);
//    }} className='w-[40%] p-[10px] rounded-[20px] bg-white text-black text-[15px] text-center cursor-pointer'>Update count!</button>
//    <button onClick={()=>{
//     changeMode();
//    }} className='w-[40%] p-[10px] rounded-[20px] bg-white text-black text-[15px] text-center cursor-pointer'>Change Mode</button>
//    </div>
//    </div>)}
//    </>
//   )
// }


  
// export default page

  //JSX ME AAP EK TERNARY OPERATOR ME EK SE JYADA ELEMENT RETURN NHI KRA SKTE HO.
// "use client"
// import React from 'react'
// import { useState } from 'react'

// const page = () => {
//   const [color, setcolor] = useState(true);
//   function colorChange(){
//     setcolor(!color);
//   }
//   return (
//     <>
//     <div className='h-[100vh] w-[100%] bg-red-900 font-[gilroy] font-[gilroy] overflow-hidden'>
//       <h1 className='text-center text-[70px] font-bold text-white'>REACT PRACTICE!</h1>
//       {color?
//       (<div className='rounded-[50%] h-[30%] w-[20%] p-[10%] mt-[5%] ml-[40%] bg-yellow-700'>
//       </div>
// )
//       :
//       (<div className='rounded-[50%] h-[30%] w-[20%] p-[10%] mt-[5%] ml-[40%] bg-black'>
//       </div>
      
//     )}
//     {color? (
//             <button onClick={()=>{
//         colorChange();
//       }} className='w-[20%] p-[10px] rounded-[20px] bg-white text-black text-[15px] text-center cursor-pointer ml-[40%] mt-[4%]'>
//         OFF
//       </button>
//     ) : (      <button onClick={()=>{
//         colorChange();
//       }} className='w-[20%] p-[10px] rounded-[20px] bg-white text-black text-[15px] text-center cursor-pointer ml-[40%] mt-[4%]'>
//         ON
//       </button>)}
//     </div>
//     </>
//   )
// }

// export default page


// "use client"
// import React, { useState } from 'react'

// const page = () => {
//   const [hide, sethide] = useState(false);
//   const hidePara = () => {
//     sethide(prev=>!prev);
//   }
//   return (
//     <>
//     <div className='h-[100vh] w-[100%] bg-red-900 font-[gilroy] font-[gilroy] overflow-hidden'>
//       <h1 className='text-center text-[70px] font-bold text-white'>REACT PRACTICE!</h1>
//       {hide&&<p className='text-white text-[20px] text-center font-medium'>Excellent decision 👏 — let’s start your React foundation course today.
// I’ll teach you React as your professor, from the ground up — clearly, deeply, and step-by-step — so that you not only use React, but understand it like a professional developer.
// 🧠 1. What is React?
// React is a JavaScript library for building user interfaces (UI).
// It helps you create interactive, fast, and dynamic web applications.
// React applications are built using components, which are small, reusable pieces of code that represent parts of the UI.
//       </p>}
//       <button onClick={()=>{
//         hidePara();
//       }
//       } className='w-[20%] p-[10px] rounded-[20px] bg-white text-black text-[15px] text-center cursor-pointer ml-[40%] mt-[4%]'>{hide?(<h1>Hide</h1>) : (<h1>Show</h1>)}</button>
//     </div>
//     </>
//   )
// }

// export default page

// "use client"
// import React from 'react'
// import { useState } from 'react'

// const page = () => {
//   const [count, setcount] = useState(0);
//   return (
//     <>
//     <div onClick={()=>{
//       setcount(count+1);
//     }} className='min-h-[100vh] w-full bg-red-900 font-[gilroy] font-[gilroy] overflow-hidden selection:white'>
//       <h1 className='sm:text-[140px] text-center lg:text-[150px] font-bold text-white mt-[10%] selection:bg-transparent selection:text-inherit'>{count}</h1>
//     </div>
//     </>
//   )
// }

// export default page

// "use client"
// import React from 'react'
// import { useState } from 'react'

// const page = () => {
//   const [login, setlogin] = useState(false);
//   function change(){
//     setlogin(!login);
//   }
//   return (
//    <>
//    <div className='min-h-[100vh] w-full bg-red-900 font-[gilroy] font-[gilroy] overflow-hidden selection:white'>
//     <h1 className='text-center lg:text-[150px] font-bold text-white mt-[10%] selection:bg-transparent selection:text-inherit'>REACT PRACTICE!</h1>
//     <h1 className='text-center lg:text-[100px] font-bold text-white mt-[10%]'>{login?"Welcome back sir" : "Please login"}</h1>
//     <button onClick={()=>{
//       change();
//     }} className='w-[20%] p-[10px] rounded-[20px] bg-white text-black text-[15px] text-center cursor-pointer ml-[40%] mt-[4%]'>{login?"Logout" : "Login"}</button>
//    </div>
//    </>
//   )
// }

// export default page
// "use client"
// import React, { useEffect } from 'react'
// import { useState } from 'react'
// import Page1 from '../Components/Page1'
// import Page2 from '../Components/page2'

// const page = () => {
//   const [name, setname
//   ] = useState(" ")
//   function changeName(){
//     setname("sujal saraswat");
//   }
//   useEffect(()=>{
//     console.log("Useeffect running..")
//   },[]);
  
//   return (
//    <>
//    <div className='min-h-[100vh] w-full bg-red-900 font-[gilroy] font-[gilroy] overflow-hidden selection:white'>
//     <h1 className='text-center lg:text-[150px] font-bold text-white mt-[2%]'>REACT PRACTICE!</h1>
//     {/* <Page1 name = "sujal" age = {21}/>
//     <Page1 name = "aman" age = {22}/>
//     <Page1 name = "chaman" age = {23}/>
//     <Page1 name = "raman" age = {24}/> */}

//     <Page2 name = {name}/>
//     <Page1 text = "change username" changeName = {changeName}/>
//    </div>
//    </>
//   )
// }

// export default page

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