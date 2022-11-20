import React,{useState} from 'react';


const Counter = () => {
    const [value,setNum] = useState(0)
  
    function increment(){
      setNum(value + 1)
    }
  
    function decrement(){
      setNum(value - 1)
    }
    return (
        <div>
            <h1>{value}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
        </div>
    );
};

export default Counter;