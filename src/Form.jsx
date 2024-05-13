import { createContext, useState,useContext } from "react";
import Tokyo from "./Tokyo";

export const Hicontext=createContext();



function Form(){
  const[name,setname]=useState("")
  const[user,setuser]=useState({})
  const[pass,setpass]=useState()

  const handlesubmit=(a)=>{
    a.preventDefault()

    if(/^[a-zA-Z]+$/.test(name)){
      setpass(true)
    }

    else{
      setpass(false)
    }
    if(pass){
      setuser({name:name})
    }
  }
  return(
    <div className="container">
      <form onSubmit={handlesubmit}>
        <h1>Register</h1>
         <label>name</label>
         <input
          type="text" className={name?"yes":"no"} 
          onChange={(a)=>{setname(a.target.value)}}
          placeholder='enter a  name'/>

<input
          type="text" className={pass?"yes":"no"} 
          onchange={(a)=>{setname(a.target.value)}}
          placeholder='enter a  pass'/>

<button >Submit</button>
      </form>
      <Hicontext.Provider value={user}>
        <Tokyo/>
      </Hicontext.Provider>


    </div>
  )
  
}
export default Form;