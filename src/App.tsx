import React, { useState } from "react";
import Divider from "./components/Divider";
import Button from "./components/Button";
import { MdEmail, MdAutorenew, MdArrowForward } from "react-icons/md";
import { Loader, Spinner } from "./components/Loader";

function App() {
  const [count, setCount] = useState(0);
  const [isLoading, setLoading] = useState(false);

  const submitHandler = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
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
          loading={isLoading}
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
          loading={isLoading}
        >
          Call me
        </Button>
        <Button
          onClick={submitHandler}
          loading={isLoading}
          size="small"
          typeVariant="outline"
          color="red"
          iconRight={MdAutorenew}
          block
        >
          Call me
        </Button>
        <Divider position="center">Icons</Divider>
        <Button
          onClick={submitHandler}
          iconRight={MdArrowForward}
          loading={isLoading}
        >
          Sign up
        </Button>
        <Divider />
      </div>
      <Spinner />
      <Loader size="md" />
    </div>
  );
}
export default App;
