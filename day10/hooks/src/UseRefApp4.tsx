import React, {useEffect, useRef} from 'react';

const UseRefApp4 = ()=> {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if(inputRef.current !== null) { //effect는 화면 켜자마자 켜짐
            inputRef.current.focus(); // 마우스 클릭없이 input태그에서 커서가 깜빡거림
            console.log(inputRef.current);
            inputRef.current.addEventListener("dblclick", () =>{
                alert("test");
            });
        }
    });

    const login = () => {
        alert(`환영합니다. ${inputRef.current!.value}`);  //!는 null체크하는것
        inputRef.current?.focus()
    };

    return (
        <div>
            <input type="text" placeholder="username" ref={inputRef} />
            <button onClick={login}> Sign in </button>
        </div>
    );
}

export default UseRefApp4;