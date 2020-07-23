import React from "react";
import Divider from "./components/Divider";
import SelectText from "./components/Select";
import Card from "./components/Card";

function App() {
  return (
    <div>
      <h1>My react components</h1>
      <Divider />
      <Card>
        <SelectText />
      </Card>
      <Divider position="left">Hello there</Divider>
    </div>
  );
}
export default App;
