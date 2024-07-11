import React, {useState, useRef} from "react";

const UseRefApp2 = () => {
    const [renderer,setRenderer] = useState(0);
    const countRef = useRef(0);
    let countVar = 10;

    const doRendering = () => {
        setRenderer(renderer + 1);
        console.log("rendering")
    }
    const increaseRef = () => {
        countRef.current = countRef.current + 1;
        console.log("ref increased", countRef.current);
    }
    const increaseVar = () => {
        countVar = countVar + 1;
        console.log("var increased", countVar);
    }
    const printResult = () => {
        console.log(`ref: ${countRef.current}, var: ${countVar}`);
    }
    return(
        <div>
            <p>Ref: {countRef.current}</p>
            <p>Var: {countVar}</p>
            
            <button onClick={doRendering}>랜더</button>
            <button onClick={increaseRef}>Ref 올려</button>
            <button onClick={increaseVar}>Var올려</button>
            <button onClick={printResult}>Ref Var 올려</button>
            
        </div>
    )
}

export default UseRefApp2;