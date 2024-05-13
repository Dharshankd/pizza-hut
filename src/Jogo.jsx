import React, { useState } from 'react'

function Jogo() {
    const[name,setname] =useState("")
    const[messi,setmessi]=useState(false)

    const handlesubmit=(d)=>{
        d.preventdefault()
        if(name==""){
            setmessi(false)
        }
        else{
            setmessi(true)
        }
    }
  return (
   
    <div>
      <input type="text" 
      placeholder='Enter a Name'
      className={messi?"one":"two"}
      onChange={(d)=>{setmessi(d.target.value)}}/>
      <button >submit</button>
    </div>
  )
}

export default Jogo;
