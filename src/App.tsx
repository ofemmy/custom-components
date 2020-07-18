import React from "react";
import Divider from "./components/Divider";

function App() {
  return (
    <div>
      <h1>My react components</h1>
      <Divider  position="left">Featured posts</Divider>
      <Divider color="orangered" />
      <a href="/">Home</a>
      <Divider orientation="vertical" color="#000"/>
      <a href="/">About me</a>
    </div>
  );
}

export default App;
