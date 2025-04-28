import { useState, useRef, useEffect } from "react"

function Ref(){
    let [numState, setNum] = useState(1);
    let numVar = 1;
    let numRef = useRef(1);

    let [value, setValue] = useState("");
    let inputRef = useRef();

    useEffect(()=>{
        inputRef.current.focus();
        // console.log(inputRef);
    }, [])
    return (
        <>
            <div>{numState} <button onClick={()=> setNum(numState + 1)}>state 증가</button></div>
            <div>{numVar} <button onClick={()=>{
                numVar += 1;
                console.log("var ==> ", numVar);
            }}>var 증가</button></div>
            <div>{numRef.current} <button onClick={()=>{
                numRef.current += 1;
                console.log("ref ==> ", numRef.current);
            }}>ref 증가</button></div>

            <input ref={inputRef} value={value} onChange={(e)=>{setValue(e.target.value)}}></input>
            <button onClick={()=>{
                setNum(numState + Number(value));
                setValue("");
                inputRef.current.focus();
            }}>추가</button>
        </>
    )
}

export default Ref