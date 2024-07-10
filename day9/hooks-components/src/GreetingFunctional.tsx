// import React from 'react';

// interface GreetingProps {
//     message: string;
// }
// export default function Greeting(props: GreetingProps){
//     console.log("rendering Greeting")
//     return (
//         <div>
//             {props.message}
//         </div>
//     );
// }

import React from 'react';

interface GreetingProps {
    message: string;
    enteredName: string;
    greetingDispatcher:React.Dispatch<{
        type:string;
        payload: string;
    }>;
}
export default function Greeting(props: GreetingProps){
    console.log("rendering Greeting")
    const onChageName = (e:React.ChangeEvent<HTMLInputElement>) => {
        props.greetingDispatcher({
            type:"enteredName",
            payload: e.target.value
        });
        props.greetingDispatcher({
            type:"message",
            payload:e.target.value
        });
        }
    return (
        <div>
            <input value={props.enteredName} onChange={onChangeName}/>
            <div>{props.message}</div>
        </div>);
}