import React, {FC, useState, useEffect, useReducer} from "react";

interface GreetingProps {
    name?: string;
}


const Greeting: FC<GreetingProps> = ({name}:GreetingProps) => {
    const [message, setMessage] = useState(""); //useState나 setState""여기에 초기값
    useEffect(() => {   //화면이 render된후에 동작한다
        if(name) {
            setMessage(`Hello from, ${name}`);
        }
    }, [name]);

    if (!name) {
        return <div>no name given</div>;
    }
    return <div>{message}</div>;
};
export default Greeting;