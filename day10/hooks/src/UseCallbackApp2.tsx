import { useEffect, useState, useCallback } from "react";
import Box from "./Box";

function UseCallbackApp2() {
    const [size, setSize] = useState(100);
    const [isDark, setIsDark] = useState(false);

    const createBoxStyle = useCallback(() => {
        return {
            width: `${size}px`, //정사각형
            height: `${size}px`,
            backgroundColor:"pink",
        };
    },[size]);

    return (
        <div style={{backgroundColor: isDark? "black" : "white"}}>
            <input type="number" value={size} onChange={(e)=>setSize(Number(e.target.value))}/>
            <br />
            <button onClick={() =>setIsDark(!isDark)}>Change Theme </button>
            <Box createBoxStyle={createBoxStyle}/>
        </div>
    );
}

export default UseCallbackApp2;