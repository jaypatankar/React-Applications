import React, {useState} from  'react';

const Counter = () => {
    const [count, setCount] = useState(0);
   
    const incrementCount = () => setCount(count + 1);
    const decrementCount = () => setCount(count - 1);
  
    return (    
      <div className="App">
        <div>
           <h3>counter = {count}</h3>
           <button onClick={incrementCount}>+</button>
           <button disabled={count == 0} onClick= {decrementCount} handleDec>-</button>
        </div>
      </div>
    );
}
export default Counter;
