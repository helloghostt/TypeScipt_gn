import React, {useState,useRef} from "react";

const UseRefApp1=()=> {
    const [count, setCount] =useState(0);
    const countRef = useRef(0);  

    console.log("렌더링", count);

    const increaseCountState =() => {
        setCount(count+1);


    };

    const increaseCountRef =() => {
        countRef.current = countRef.current + 1;
    };
    return (
        <div>
            <p>Ref: {countRef.current} </p>
            <p>State: {count} </p>
            <button onClick={increaseCountRef}>Ref 올려</button>
            <button onClick={increaseCountState}>State 올려</button>
            {/* Ref만 눌러서는 안올라가고 State를 눌러야 반영됨
            하지만 렌더링만 안되는것이고 메모리에 있는 데이터로는 올라간다는 것 */}
        </div>
    );
};


export default UseRefApp1;