import React, {useState, useEffect} from 'react';

function UseEffectApp1() {
    const [count, setCount] = useState(1);
    const [name, setName] = useState("");

    const handleCountUpdate =() => {
        setCount(count +1 );
    }
    useEffect(()=> {
        console.log("렌더링")
    // });
    // }, [count]) //count가 바뀌면 useEffect가 호출
    });

    useEffect(()=> {
        console.log("count렌더링")
    },[count]);

    useEffect(()=> {
        console.log("name렌더링")
    },[name]);

    useEffect(()=> {
        console.log("init렌더링")
    },[]);


    //많으면 느려지니까 이름을 넣어서 쪼개는 의미로 해주는게 좋음??

    function handleInputChange(e:React.ChangeEvent<HTMLInputElement>):void {
        setName(e.target.value);
    }
    return (
        <div>
            <button onClick={handleCountUpdate}>update</button>
            <span> Count: {count}</span>

            <input type="text" value={name} onChange={handleInputChange}></input>
            <span> Name: {name}</span>
        </div>
    );
}

export default UseEffectApp1;