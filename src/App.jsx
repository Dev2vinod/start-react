
import { useState } from 'react'
import './App.css'

function App() {
  
 const [text ,SetText] =useState('');

 var  addList =document.getElementById("addList")

 function addtodo(e){
  let card = `<li>
          <span>${text}</span>
          <button className='bg-blue-500 px-4 m-2 hover:bg-blue-400'>Edit</button>
          <button className='bg-red-500 px-4 m-2 hover:bg-red-400'>Delete</button>
        </li>
 `

  addList.innerHTML +=card
  console.log("text-->",text)

  SetText('')
 }

//  const addBtn =document.getElementById("addBtn");

//  addBtn.addEventListener("click",()=>{
//  })






  
  return (
    <>
     <p className='bg-blue-500 text-2xl text-center'>Todo App with time </p>

     <div className='p-2 m-2'>
      <input type="text" name="" id="userInput" placeholder='Enter the Message' className='p-2 m-2 px-5 rounded-md shadow text-red-500' onChange={(e)=>SetText(e.target.value )}  value={text}/>
      <button id='addBtn' onClick={addtodo}>Add todo</button>



     </div>

     <div>
      <ul id='addList'>
        <li>
          <span>{text}</span>
          <button className='bg-blue-500 px-4 m-2 hover:bg-blue-400'>Edit</button>
          <button className='bg-red-500 px-4 m-2 hover:bg-red-400'>Delete</button>
        </li>
      </ul>
     </div>

     {/* <button onClick={SetCount((count)=>count+1)} >tab me</button> */}
    </>
  )
}

export default App
