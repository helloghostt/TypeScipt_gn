import React, {useState, ChangeEvent} from 'react';

function UseSampleApp2() {
    const [a, setA] = useState<string>('0');
    const [b, setB] = useState<string>('0');
    const [resultAdd, setResultAdd] = useState<number>(0);

    const [c, setC] = useState<string>('0');
    const [d, setD] = useState<string>('0');
    const [resultMinus, setResultMinus] = useState<number>(0);
    
    const [e, setE] = useState<string>('0');
    const [f, setF] = useState<string>('0');
    const [resultMultiply, setResultMultiply] = useState<number>(0);
    
    const [g, setG] = useState<string>('0');
    const [h, setH] = useState<string>('0');
    const [resultDivide, setResultDivide] = useState<number>(0);
    
    const add=()=>{
        setResultAdd(Number(a)+Number(b));
    };
    
    const minus=()=>{
        setResultMinus(Number(c)-Number(d));
    };
    
    const multiply=()=>{
        setResultMultiply(Number(e)*Number(f));
    };
    
    const divide=()=>{
        setResultDivide(Number(g)/Number(h));
    };
    function handleInputChange(setter: React.Dispatch<React.SetStateAction<string>>) {
        return (e: React.ChangeEvent<HTMLInputElement>): void => {
            setter(e.target.value);
        };
    }

    return(
        <div>
            <div>
                <input type="number" value={a} onChange={handleInputChange(setA)} />
                <input type="number" value={b} onChange={handleInputChange(setB)} />
                <button onClick={add}>+</button>
                <span> ={resultAdd}</span>
            </div>
            <div>
                <input type="number" value={c} onChange={handleInputChange(setC)} />
                <input type="number" value={d} onChange={handleInputChange(setD)} />
                <button onClick={minus}>-</button>
                <span> ={resultMinus}</span>
            </div>
            <div>
                <input type="number" value={e} onChange={handleInputChange(setE)} />
                <input type="number" value={f} onChange={handleInputChange(setF)} />
                <button onClick={multiply}>*</button>
                <span> ={resultMultiply}</span>
            </div>
            <div>
                <input type="number" value={g} onChange={handleInputChange(setG)} />
                <input type="number" value={h} onChange={handleInputChange(setH)} />
                <button onClick={divide}>/</button>
                <span> ={resultDivide}</span>
            </div>             
        </div>
    );

}

export default UseSampleApp2;


