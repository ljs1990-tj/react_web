import { useContext, useState } from "react"
import HeaderContext from "../component/HeaderContext"
import { MyContext } from "../context/MyContext"

function Child1(){
    return (
        <div>
            자식 컴포넌트 111
            <Child2></Child2>
        </div>
    )
}

function Child2(){
    return (
        <div>
            자식 컴포넌트 222

            <button>검은색/빨간색</button> 
            {/* 위 버튼 클릭 시 isDark값이 true<=>false 왔다갔다 */}
            {/* Child1의 텍스트가 isDark가 true면 검은색 아니면 빨간색 */}
            <Child3></Child3>
        </div>
    )
}

function Child3(){
    let {isDark, setDark} = useContext(MyContext);
    console.log(isDark);
    return (
        <div>
            자식 컴포넌트 333
        </div>
    )
}

function ContextEx(){
    let [isDark, setDark] = useState(false); 
    // props를 이용해서 Child3 컴포넌트까지 전달
    // Child3 컴포넌트에서 결과 출력
    return (
        <>
            <MyContext.Provider value={{isDark, setDark}}>
                <Child1></Child1>
            </MyContext.Provider>
        </>
    )
}

export default ContextEx