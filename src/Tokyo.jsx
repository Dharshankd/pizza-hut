import React, { useContext } from 'react'
import  { Hicontext, } from './Form';

function Tokyo() {
    const user=useContext(Hicontext)
  return (
   <>
   <h1>{user.name}</h1>
   </>
  )
}

export default Tokyo;
