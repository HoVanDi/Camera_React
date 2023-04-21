// gọi các commponent

import React from "react";
import "./App.css";

// import Statedemo from "../content/stateDemo";
// import Change from "../content/change";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Content from "../content/Content";
// import ShowCard from "../content/content";
// import Leftcontent from "../content/Leftcontent";
//import Rightcontent from "../content/Rightcontent";
// import Sanpham from "../Sanpham/sanpham";

function App() {
  return (
    <div id="container">
      <Header />
      {/* this is content area */}
      <Content/>
      {/* footer content */}
      <Footer />
    </div>
  );
}

export default App;
