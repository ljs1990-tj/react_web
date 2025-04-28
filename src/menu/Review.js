import { useState, useEffect } from "react";

function Header({title, fnInfo}){
    // props 파라미터안에 함수로 fnInfo를 받아서 타이틀 클릭 시 실행
    return (
        <>
            <h2><a href="/" onClick={(e)=>{
                e.preventDefault();
                fnInfo(title);
            }}>{title}</a></h2>
        </>
    )
}

function Body(props){
    return (
        <>
            {props.count}
            <button onClick={()=>{
                props.fnCount(props.count+1);
            }}>증가!</button>
        </>
    )
}

function Footer(props){
    let [student, setStu] = useState({stuNo : "", stuName : "", stuDept : ""});
    const fnStuInfo = (e)=>{
        setStu({...student, [e.target.id] : e.target.value});
    }
    return (
        <>
            <div><input placeholder="학번" value={student.stuNo} id="stuNo" onChange={fnStuInfo}></input></div>
            <div><input placeholder="이름" value={student.stuName} id="stuName" onChange={fnStuInfo}></input></div>
            <div><input placeholder="학과" value={student.stuDept} id="stuDept" onChange={fnStuInfo}></input></div>
            <div><button onClick={()=>{
                props.fnSetList([...props.list, student]);
                setStu({stuNo : "", stuName : "", stuDept : ""});
            }}>추가</button></div>
            <hr></hr>
            {props.list.map((item)=>{
                return <li key={item.stuNo}>학번 : {item.stuNo}, 이름 : {item.stuName}, 학과 : {item.stuDept}</li>
            })}
        </>
    )
}

function Review(){
    let [count, setCount] = useState(0);
    let [number, setNumber] = useState(0);
    let [list, setList] = useState([
        {stuNo : "1234", stuName : "홍길동", stuDept : "컴퓨터"},
        {stuNo : "1213", stuName : "김철수", stuDept : "전기"},
        {stuNo : "9876", stuName : "박영희", stuDept : "디자인"}
    ]);
    useEffect(()=>{
        // alert("안녕?");

        return ()=>{
            alert("클린 업 함수!");
        }
    }, [count]);

    return (
        <>
            <Header title="Hello React!" fnInfo={(txt)=>{ alert(txt); }}></Header>
            <hr></hr>
            <Body count={count} fnCount={setCount}></Body>
            <hr></hr>
            <Body count={number} fnCount={setNumber}></Body>
            <hr></hr>
            <Footer list={list} fnSetList={setList}></Footer>
        </>
    )
}
export default Review