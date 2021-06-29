import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import HeaderLayout from "./components/Header/index";
import HomeContainer from "./containers/HomeContainer";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <HeaderLayout title="Market" />
      <HomeContainer />
      <Footer>©2019 Market &#183; Privacy Policy</Footer>
    </div>
  );
}

export default App;
