import React, {useMemo, useState} from "react";

function hardCalculate(hardNumber : number):any {
    console.log('hardCalculate: ', hardNumber);
    for (let i=0 ; i <99999999; i++) {}
    //생각하는 시간
    return hardNumber + 10000;
}

function easyCalculate(easyNumber : number):any {
    console.log('easyCalculate: ', easyNumber);
    return easyNumber + 1;
}



function UseMemoApp1() {
    const [hardNumber, setHardNumber] = useState(1);
    const [easyNumber, setEasyNumber] = useState(1);

    const hardResult = useMemo(() => {
        return hardCalculate (hardNumber);
    }, [hardNumber]);

    const easyResult = useMemo(() => {
        return easyCalculate (easyNumber);
    }, [easyNumber]);



    return (
        <div>
            <h3>어려운 계산기</h3>
            <input type="number" value={hardNumber} onChange={(e)=>{setHardNumber(Number(e.target.value));}}></input>
            <span>+10000 = {hardResult}</span>

            
            <h3>쉬운 계산기</h3>
            <input type="number" value={easyNumber} onChange={(e)=>{setEasyNumber(Number(e.target.value));}}></input>
            <span>+1 = {easyResult}</span>

        </div>
    );
}


export default UseMemoApp1;

