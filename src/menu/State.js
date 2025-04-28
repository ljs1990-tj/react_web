import { useState } from 'react';

function NumState() {
  let [num, setNum] = useState(1);
  const fnIncrease = function(){
    setNum(++num);
  }
  return (
    <div className="App">
       {num}
       <div>
        <button onClick={fnIncrease}>증가!</button>
       </div>
    </div>
  );
}
function State() {
  let [list, setList] = useState([
    <li key="1">홍길동</li>,
    <li key="2">김철수</li>,
    <li key="3">박영희</li>
  ]);
  let name = "";
  const fnAddUser = ()=>{
    let item = <li key={list.length+1}>{name}</li>
    // list.push(item);
    // let newList = [item, ...list];
    // newList.push(item);
    setList([item, ...list]);
    console.log(list);
  
  }
  return (
    <div>
      <input onChange={(e)=>{
        // console.log(e.target.value);
        name = e.target.value;
      }}></input>
      <button onClick={fnAddUser}>추가</button>
      {list}
    </div>
  )
}

export default State;
