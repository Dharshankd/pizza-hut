import { useReducer } from "react";


function Testreduce(){
    let count =0;
    let mycounter=(state,action)=>{
        switch(action.type)
        {
            case 'in':
                return state+1;
            case 'de':
                return state-1;
                default:
                    return state;
                
        }

    }
    const [mycount, dispatch]=useReducer(mycounter, count)
    return (
        <div>
                <button onClick={()=>{dispatch({type:"in"})}}>+</button>
                <p>{mycount}</p>
                <button onClick={()=>{dispatch({type:"de"})}}>-</button>
        </div>
    )
}
export default Testreduce;