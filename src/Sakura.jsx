import React, { createContext, useContext, useState } from 'react'


const onepiece=createContext()

function Sasuke() {
    const[user]=useState("naruto")
  return (
    <div>
    <onepiece.Provider value={user}>
        <h3>Shippuden</h3>
        <Sarada/>
    </onepiece.Provider>
    </div>
  )
}

export default Sasuke;
function Sarada(){
    
    return(
        <div>
            <h2>ex2</h2>
            <Boruto/>
        </div>
    )
}
function Boruto(){
    const Orochimaru=useContext(onepiece)
    return(
        <div>
            <h3>
                {Orochimaru}
            </h3>
        </div>
    )
}

