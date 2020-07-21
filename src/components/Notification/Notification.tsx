import React, { HTMLAttributes } from "react";
import styled from "styled-components";

import Card from "../Card"

interface NotificationProps extends HTMLAttributes<HTMLDivElement>{

}
const Notification = (props:NotificationProps) => {
  return <Card 
  color="orangered"
  width="40rem"
  height="15rem"
  >Notification</Card>;
};

export default Notification;
