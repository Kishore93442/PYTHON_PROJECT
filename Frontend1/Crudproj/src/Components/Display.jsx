import React, { useState } from 'react'
import axios, {} from  'axios'
export const Display = () => {

const[user,setUser]=useState(
    {
        name:"",
        age:"",
        address:"",
        id:"",
        roll:"",
        email:"",
    }
)

function change(e){
    setUser({...user,[e.target.name]:e.target.value})
}
console.log(user)
async function handleSubmit(e){
    e.preventDefault()
    let a=await axios.post("http://127.0.0.1:8000/crud/teacher/",user)
    console.log(a);
    
}
async function handleGet(){
    let a=await axios.get("http://127.0.0.1:8000/crud/teacher/")
    console.log(a.data);
    
}

    return (
        <>   <button onClick={handleGet}>get</button>
            <form onSubmit={handleSubmit}>
                Enter your name<input type="text" name='name' onChange={change}/>
                Age<input type="number" name='age' onChange={change} />
                Address<input type="text"  name='address' onChange={change}/>
                id<input type="number" name='id' onChange={change}/>
                Roll<input type="text" name='roll' onChange={change} />
                email<input type="email"  name='email' onChange={change}/>
                <button type='Submit'>Submit</button>
            </form>

        

        </>
    )
}
