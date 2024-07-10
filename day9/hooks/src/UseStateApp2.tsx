import {useState} from "react";

const heavyWork=() => {
    console.log("엄청 무거운 작업");
    return ["홍길동", "주우재"]
}
function UseStateApp2() {
    const [names, setNames] = useState(()=> heavyWork());
    const [input, setInput] = useState("");
    const handleInputChange =(e:any) => {
        setInput(e.target.value);  
    };
    const handleUpload =()=>{
        setNames((prevState)=>{
            console.log("이전state",prevState);
            return [input, ...prevState];

        });
    };
    
    // console.log(input);

    return (
        <div>
            <input type="text" value={input} onChange={handleInputChange}/>

            <button onClick={handleUpload}>upload</button>
            {names.map((name, idx) => {
                return <p key={idx}>{name}</p>;
            })}
        </div>
        
    );
}

export default UseStateApp2;