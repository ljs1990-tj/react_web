import { useEffect, useState } from "react";

function Effect(){
    // 버튼 누르면 숫자 1씩 증가하는 코드 작성
    let [num, setNum] = useState(1);
    let [num2, setNum2] = useState(1);
    useEffect(()=>{
        console.log("useEffect 호출 됨!");
    }, [num])
    return <div>
        {num}
        <div>
            <button onClick={()=>{
                setNum(++num);
            }}>증가!</button>
        </div>
        <hr></hr>
        {num2}
        <div>
            <button onClick={()=>{
                setNum2(++num2);
            }}>증가!222</button>
        </div>
    </div>
}

export default Effect