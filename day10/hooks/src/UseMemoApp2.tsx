import React, {useEffect, useMemo, useState}from "react";

function UseMemoApp2() {
    const [number, setNumber] = useState(0);
    const [isKorea, setIsKorea] = useState(true);

    const location = useMemo (() => {
        return { country : isKorea? "한국" : "미국"}
    },[isKorea]);
    
    useEffect(() => {
        console.log("location changed");
    }, [location]);

    return (
        <div>
            <h3>하루에 몇끼 먹어요?</h3>
            <input type="number" value={number} onChange={(e) =>setNumber(parseInt(e.target.value))}/>

            <h3>어느나라에 있어요</h3>
            <p>나라: {location.country}</p>
            <button onClick={() => setIsKorea(!isKorea)}>비행기 타자</button>
        </div>
    );
}

export default UseMemoApp2;