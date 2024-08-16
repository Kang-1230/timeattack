import React from "react";

const Content = ({ setcountry, country }) => {
  const handleDeleteCountry = (id) => {
    return setcountry.filter(setcountry.country.id !== id);

    //기존 리스트에서 id값이 같은 객체를 찾아서 그것만 빼고 return 해
    //setcountry의 id값을 어케 지정하노
    //setcountry가 정확히 객체인가?
  };

  const handleAddCountry = (event) => {
    event.preventdefault();
    if (name !== event.name) {
      <>
        <ul>{event.id}</ul>
        <ul>{event.name}</ul>
        <ul>{event.gold}</ul>
        <ul>{event.silver}</ul>
        <ul>{event.bronze}</ul>
        <button onClick={handleDeleteCountry}>삭제</button>
      </>;
      setcountry([...country, event]);
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
    const newCountry = setcountry.find((event) => {
      setcountry.map(){
        if (name === event.name){
            return setcountry();
        } else {
            return country;
        }
      }
    });
    setcountry(newCountry);
  };
  // 기존 리스트에서 다른 점을 바꿔야 해
  // find로 기존 리스트에서 이름이 같은 것을 찾아
  // 그리고 기존 리스트 새로운 값으로 덮어씌워 어케 덮어씌우노
  // 기존 배열 안에서 객체 하나만 바뀔 수 있나?
  // 아니면 새로운 값으로 아예 바꾸면 되나?

  //setState를 정확히 어떻게 써야 하지?

  return (
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
      <button onClick={handleAddCountry}>추가</button>
      {/* //추가 버튼을 만들고 클릭하면 inputHandler가 작동돼야 해 
        그리고 list에 추가돼야 하는데 어떻게 해야하지?*/}
      <button onChange={event.targer.value}>업데이트</button>
    </section>
  );
};

export default Content;
