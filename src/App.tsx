import React, { useState } from "react";
 import Divider from "./components/Divider";
// import Button from "./components/Button";
// import { MdEmail, MdAutorenew, MdArrowForward } from "react-icons/md";
// import { Loader, Spinner } from "./components/Loader";
import Notification from "./components/Notification";
function App() {
  return (
    <div>
      <h1>My react components</h1>
      <Divider />
      <Notification
        title="Notification title"
        message="This is a notification title that was written by me and 
        I wanna thank you. This is a notification title that was written by me and 
        I wanna thank you"
        type="error"
        position="topLeft"
      />
    </div>
  );
}
export default App;
