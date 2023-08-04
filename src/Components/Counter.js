import React, {useState} from "react";

function Counter(props){
    // console.log("I am re render");
    const [counter,setCounter] = useState(0);
    const handleIncrement = ()=>{
        setCounter(counter+1);
    }

    const handleDecrement = ()=>{
        if(counter>0){
        setCounter(counter-1);
        }
    }

    return(
        <div className="counter">
            <div className="btn-group">
                <button onClick={handleIncrement} className="counter-btn">+</button>
                {props.title} {counter}
                <button onClick={handleDecrement} className="counter-btn">-</button>
            </div>
        </div>
    );
}

export default Counter;

