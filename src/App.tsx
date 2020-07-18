import React from "react";
import Divider from "./components/Divider";

function App() {
  return (
    <div>
      <h1>My react components</h1>
      <Divider  position="left">Featured posts</Divider>
      <Divider color="orangered" />
    </div>
  );
}

export default App;
