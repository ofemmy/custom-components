import React, { useState } from "react";
import Divider from "./components/Divider";
import Button from "./components/Button";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>My react components</h1>
      <p>{count}</p>
      <Divider position="left">Featured posts</Divider>
      <Divider color="orangered" />
      <a href="/">Home</a>
      <Divider orientation="vertical" color="#000" />
      <a href="/">About me</a>
      <Divider />
      <div>
        <Button
          onClick={() => {
            setCount(count + 1);
          }}
          rounded
          block
        >
          Call me
        </Button>
        <Button
          onClick={() => {
            setCount(count + 1);
          }}
          size="large"
          color="#323232"
          block
        >
          Call me
        </Button>
        <Button
          onClick={() => {
            setCount(count + 1);
          }}
          size="small"
          typeVariant="outline"
          color="red"
        >
          Call me
        </Button>
      </div>
    </div>
  );
}

export default App;
