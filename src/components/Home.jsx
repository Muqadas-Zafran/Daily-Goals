import React , {useEffect, useState} from 'react'
import Task from './Task'

const Home = () => {
  const initialArray = localStorage.getItem("tasks")?
  JSON.parse(localStorage.getItem("tasks")):[];
  const [tasks,setTasks] = useState(initialArray)
  const [title,setTitle] = useState("")
  const [description,setDescription] = useState("")
  console.log(title,description)
  const submitHandler = (e)=>{
    e.preventDefault();
    setTasks([...tasks,{title,description}])
    setTitle("");
    setDescription("");
  }
  const deleteTask = (index)=>{
    const filterArray = tasks.filter((val,i)=>{
      return i!==index;
      

    })
    setTasks(filterArray)
    
  };
  useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(tasks))

  },[tasks])

  return (
    <div className='container'>
      <h1>DAILY GOALS</h1>
        <form onSubmit={submitHandler}>
          
            <input type="text" placeholder='Title'
             value={title} onChange={(e)=>setTitle(e.target.value)} required
             />
            <textarea placeholder='Description'
             value={description} onChange={(e)=>setDescription(e.target.value)} required
            ></textarea>
            <button type='submit'>ADD</button>

        </form>
        
        {tasks.map((item,index)=>(
          <Task key={index} title={item.title} description={item.description} 
          deleteTask={deleteTask} index={index}/>
        ))}
    </div>
    
  )
}

export default Home
