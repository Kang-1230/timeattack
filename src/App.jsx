import { useState } from "react";

function App() {
  const [name, setname] = useState("0");
  const [gold, setgold] = useState("0");
  const [silver, setsilver] = useState("0");
  const [bronze, setbronze] = useState("0");
  const [country, setcountry] = useState([{
    id : {new Date().getTime()},
    name : {name},
    gold : {gold},
    silver : {silver},
    bronze : {bronze},
}]); 
  //초기값을 넣어줘야 해



  const handleAddCountry  = (event) => {
    event.preventdefault();
    if (name !== event.name) {
      <>
        <ul>{event.id}</ul>
        <ul>{event.name}</ul>
        <ul>{event.gold}</ul>
        <ul>{event.silver}</ul>
        <ul>{event.bronze}</ul>
      </>;
setcountry([...country, event]);
     // 뭘 넣어야 하지?
    } else {
      alert("이미 등록된 국가입니다");
      return;
    }
    
  };

  //event가 들어가면
  //먼저 있던 name이랑 들어가는 name이 같은지 확인한다.
  //같지 않으면 input된 값을 ul에 넣는다.어떻게?

  const handleUpdateCountry = (event) => {
    event.preventDefault();
    setcountry.find(
      if(name === event.name){
        
      }
    )
  };
   //기존 리스트에서 이름이 같은 list를 찾아
   // 찾아서 기존 객체와 다른 점을 찾아
   //찾아서 다른 점을 바꿔

  return (
    <>
      <header>2024 파리 올림픽</header>
      <section className="input">
        <div className="country">
          국가명
          <input type="text" />
        </div>
        <div className="gold">
          금메달
          <input type="text" />
        </div>
        <div className="silver">
          은메달
          <input type="text" />
        </div>
        <div className="bronze">
          동메달
          <input type="text" />
        </div>
        <button onClick={handleAddCountry }>추가</button>
        {/* //추가 버튼을 만들고 클릭하면 inputHandler가 작동돼야 해 
        그리고 list에 추가돼야 하는데 어떻게 해야하지?*/}
      </section>
      <li className="list">
        <ul className="listitem">
          {country.map((country) => (
            <div key={c.id}>{c.name}</div>
          ))}
        </ul>
      </li>
    </>
  );
}

//

export default App;
