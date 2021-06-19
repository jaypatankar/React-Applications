import React, {useState, useRef, useEffect} from 'react';
import './Calculator.css'

const Calculator = () => {
    const [result, setResult] = useState("");
    const inputRef = useRef(null);

    useEffect(() => inputRef.current.focus());
    
    const handleClick = (e) => {
        setResult(result.concat(e.target.name));
    }

    const handleClear = () => {
        setResult('');
    }

    const handleBackSpace = () => {
        setResult(result.slice(0, -1));
    }

    const handleResult = () => {
        try{
            setResult(eval(result));
        } catch(err) {
            setResult('ERROR');
        }
    }

    return(
        <div className="calc-app">
            <input type="text" style={{width:'97%'}} value={result} ref={inputRef} onFocus={function(e) {var val = e.target.value; e.target.value = ''; e.target.value = val;}} />
            <div className="keypad">
                <button onClick={handleClear} id="clear">AC</button>
                <button onClick={handleBackSpace} id="backspace">C</button>
                <button onClick={handleClick} name="+">+</button>
                <button onClick={handleClick} name="7">7</button>
                <button onClick={handleClick} name="8">8</button>
                <button onClick={handleClick} name="9">9</button>
                <button onClick={handleClick} name="-">-</button>
                <button onClick={handleClick} name="4">4</button>
                <button onClick={handleClick} name="5">5</button>
                <button onClick={handleClick} name="6">6</button>
                <button onClick={handleClick} name="*">*</button>
                <button onClick={handleClick} name="1">1</button>
                <button onClick={handleClick} name="2">2</button>
                <button onClick={handleClick} name="3">3</button>
                <button onClick={handleClick} name="/">/</button>
                <button onClick={handleClick} name="0">0</button>
                <button onClick={handleClick} name="1">1</button>
                <button onClick={handleResult} id="result">Result</button>
            </div>
        </div>
    )
}

export default Calculator;