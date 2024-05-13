import React, { useReducer } from 'react';


const initialState = {
  jsonData: { key1: 'naruto loves hinata', key2: 'sakura loves sasuke' },
  otherState: 'someValue',
};


const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_JSON_DATA':
      return { ...state, jsonData: action.payload };
    case 'UPDATE_OTHER_STATE':
      return { ...state, otherState: action.payload };
    default:
      return state;
  }
};

const Leo = () => {
 
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleJsonDataUpdate = () => {
   
    dispatch({
      type: 'UPDATE_JSON_DATA',
      payload: { key1: 'naruto weds sakura', key2: 'sasuke weds hinata' },
    });
  };

  const handleOtherStateUpdate = () => {
   
    dispatch({
      type: 'UPDATE_OTHER_STATE',
      payload: 'sakura vs hinata',
    });
  };

  return (
    <div>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <button onClick={handleJsonDataUpdate}>Update JSON Data</button>
      <button onClick={handleOtherStateUpdate}>Update Other State</button>
    </div>
  );
};

export default Leo;