import React, { useState } from "react";
import Divider from "./components/Divider";
import Button from "./components/Button";
import { MdEmail, MdAutorenew, MdArrowForward } from "react-icons/md";
import { Loader, Spinner } from "./components/Loader";

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
          iconLeft={MdEmail}
          iconRight={MdEmail}
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
          color="cyan"
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
          iconRight={MdAutorenew}
        >
          Call me
        </Button>
        <Divider position="center">Icons</Divider>
        <Button onClick={() => {}} iconRight={MdArrowForward} disabled>
          Sign up
        </Button>
        <Divider />
      </div>
      <Spinner/>
      <Loader size="md"/>
    </div>
  );
}
export default App;
