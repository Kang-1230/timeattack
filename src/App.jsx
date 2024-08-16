import { useState } from "react";
import Header from "./component/Header";
import Content from "./component/Content";
import List from "./component/List"
import Footer from "./component/Footer"

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

  

  return (
    <>
      <Header />
      <Content props{setcountry, country}/>
      <List props{country}/>
      <Footer />
    </>
  );
}

//

export default App;

