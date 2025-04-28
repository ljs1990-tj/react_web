import Header from '../component/Header';
import Body from '../component/Body';
import Footer from '../component/Footer';

function App() {
  let list = [
    {subId : 1, subName : "java"},
    {subId : 2, subName : "html"},
    {subId : 3, subName : "oracle"},
    {subId : 4, subName : "react"}
  ];
  let numList = [1,3,5,2,4];

  return (
    <div className="App">
       <Header title="헤더다 !!" contents="과목을 보여줍니다." fnHeader={(text)=>{
          alert(text);
       }}></Header>
       <Header title="프로그래밍 재밌다 !" fnHeader={(text)=>{}}></Header>
       <Body list={list} fnBody={(subName)=>{
          alert(subName);
       }}></Body>
       <Footer list={numList} fnFooter={()=>{
        // numList가 목록으로 출력
        // 목록 클릭 시 해당 숫자 alert창에 띄우기
       }}></Footer>
    </div>
  );
}

export default App;
