import React, { useState, ChangeEvent } from "react";
import Divider from "./components/Divider";
import Select from "./components/Select";
import Card from "./components/Card";

function App() {
  const [fruits, setFruit] = useState([
    "mango",
    "orange",
    "tangerine",
    "apple",
    "avocado",
  ]);
  const [chosenFruit, setChosenFruit] = useState("");
  const changeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    setChosenFruit(e.target.value);
  };
  return (
    <div>
      <h1>My react components</h1>
      <Divider />
      <Card>
        <Select placeholder="Please select a fruit" onChange={changeHandler}>
          {fruits.map((fruit, i) => (
            <option value={fruit} key={i}>
              {fruit}
            </option>
          ))}
        </Select>
      </Card>
      <Divider position="left">Fruit Chosen</Divider>
      <p>{chosenFruit || "None"}</p>
    </div>
  );
}
export default App;
