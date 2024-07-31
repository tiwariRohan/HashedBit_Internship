import React,{ useState} from 'react';
import './Calculator.css';


function Calculator(){
    const[display,setDisplay]=useState('');

    const handleClick=(value)=>{
        setDisplay((prevDisplay)=> prevDisplay+value);
    };

    const handleClear=()=>{
        setDisplay('');
    };

    const handleEqual=()=>{
        try{
            setDisplay(eval(display).toString());

        }catch(error){
            setDisplay('Error');
        }
    };
    return (
        <div className="calculator-container">
        <h1 className="calculator-heading">Calculator</h1>
        <div className="calculator">
          <div className="display">{display}</div>
          <div className="buttons">
            <button onClick={() => handleClick('1')}>1</button>
            <button onClick={() => handleClick('2')}>2</button>
            <button onClick={() => handleClick('3')}>3</button>
            <button onClick={() => handleClick('+')}>+</button>
            <button onClick={() => handleClick('4')}>4</button>
            <button onClick={() => handleClick('5')}>5</button>
            <button onClick={() => handleClick('6')}>6</button>
            <button onClick={() => handleClick('-')}>-</button>
            <button onClick={() => handleClick('7')}>7</button>
            <button onClick={() => handleClick('8')}>8</button>
            <button onClick={() => handleClick('9')}>9</button>
            <button onClick={() => handleClick('*')}>*</button>
            <button onClick={handleClear}>C</button>
            <button onClick={() => handleClick('0')}>0</button>
            <button onClick={handleEqual}>=</button>
            <button onClick={() => handleClick('/')}>/</button>
          </div>
        </div>
      </div>
    );
}

export default Calculator;