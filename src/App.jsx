import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AppBar from "./components/AppBar";
import TitileContent from "./components/TitileContent";
import Sponcers from "./components/Sponcers";
import Banner from "./components/Banner";
import Blog from "./components/Blog";
import Faq from "./components/Faq";
import Pricing from "./components/Pricing";

function App() {
  return (
    <>
      <AppBar></AppBar>
      <TitileContent></TitileContent>
      <Banner></Banner>
      <Sponcers></Sponcers>
      <Blog></Blog>
      <Pricing></Pricing>
      <Faq></Faq>
    </>
  );
}

export default App;
