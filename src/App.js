import "./App.css";
import Menu from "./components/Menu/Menu";
import { useState } from "react";
import Assessment from "./pages/Assessment";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/MainBody/Header";

function App() {
  const [page, setPage] = useState("Assessment");
  const [mobMenuVisibility, setMobMenuVisibility] = useState(null);

  const toggleMobMenu=()=>{
    mobMenuVisibility===true ? setMobMenuVisibility(false) : setMobMenuVisibility(true);
  }
  
  function getMainBody() {
    if (page === "Assessment") {
      return <Assessment />;
    }
  }
  return (
    <div className="App">
      <Menu visibility={mobMenuVisibility} toggleMobMenu={toggleMobMenu} />
      <div className="Dashboard">
        <Navbar heading={page} toggleMobMenu={toggleMobMenu} />
        <Header heading={page} />
        {getMainBody()}
      </div>
    </div>
  );
}

export default App;
