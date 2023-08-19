import "./App.css";
import Menu from "./components/Menu/Menu";
import { useState } from "react";
import Assessment from "./pages/Assessment";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/MainBody/Header";

function App() {
  // useState is used so that we can render the dashboard according to the page selected from menu
  const [page, setPage] = useState("Assessment");

  // To show and hide menu in mob view
  const toggleMobMenu = () => {
    // mobMenuVisibility===true ? setMobMenuVisibility(false) : setMobMenuVisibility(true);
    let element = document.getElementById("menu");
    if (element.style.display === "none") {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  };

  // Return the component respective to the page selected in menu
  function getMainBody() {
    if (page === "Assessment") {
      return <Assessment />;
    }
  }
  return (
    <div className="App">
      <Menu toggleMobMenu={toggleMobMenu} />
      <div className="Dashboard">
        <Navbar heading={page} toggleMobMenu={toggleMobMenu} />
        <Header heading={page} />
        {getMainBody()}
      </div>
    </div>
  );
}

export default App;
