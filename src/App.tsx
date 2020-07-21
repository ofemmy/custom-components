import React, { useState } from "react";
// import Divider from "./components/Divider";
// import Button from "./components/Button";
// import { MdEmail, MdAutorenew, MdArrowForward } from "react-icons/md";
// import { Loader, Spinner } from "./components/Loader";
import Card from "./components/Card";
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
    </div>
  );
}
export default App;
