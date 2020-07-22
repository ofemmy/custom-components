import React, { HTMLAttributes, useState, MouseEvent, useEffect } from "react";
import styled, { Keyframes } from "styled-components";
import {
  MdClose,
  MdHighlightOff,
  MdInfoOutline,
  MdCheckCircle,
} from "react-icons/md";
import Card from "../Card";
import { slideInFromRight, slideInFromLeft } from "./animations";
import { IconType } from "react-icons/lib";
const StyledNotification = styled.div<NotificationProps>`
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    margin-bottom: 1rem;
    .title {
      font-size: 1.9rem;
      line-height: 2.4rem;
      text-transform: capitalize;
    }
    .icon {
      font-size: 2rem;
      cursor: pointer;
      margin-top: 2px;
    }
  }
  .body {
    line-height: 2rem;
  }
`;
interface NotificationProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  message: string;
  type?: "info" | "success" | "error" | "warning";
  position?: "topLeft" | "topRight" | "bottomLeft" | "bottomRight";
  duration?: Number;
}
interface PositionType {
  position: "absolute";
  [values: string]: string;
}
// let colorMap = new Map<NotificationProps["type"], string>([
//   ["info", "#fff"],
//   ["error", "red"],
//   ["success", "green"],
//   ["warning", "#f0a500"],
// ]);

const Notification = (props: NotificationProps) => {
  const [isOpen, setOpen] = useState(true);
  const { type, position = "topRight" } = props;
  let positionConfig: PositionType = { position: "absolute" };
  let animationConfig: { type: Keyframes } = { type: slideInFromRight }; //default
  switch (position) {
    case "topRight":
      positionConfig.top = "3%";
      positionConfig.right = "3%";
      break;
    case "topLeft":
      positionConfig.top = "3%";
      positionConfig.left = "3%";
      animationConfig.type = slideInFromLeft;
      break;
    case "bottomLeft":
      positionConfig.bottom = "3%";
      positionConfig.left = "3%";
      animationConfig.type = slideInFromLeft;
      break;
    case "bottomRight":
      positionConfig.bottom = "3%";
      positionConfig.right = "3%";
      break;
    default:
      break;
  }
  //close after duration
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(false);
    }, props.duration || 5000);
    return () => clearTimeout(timer);
  }, [props.duration]);

  //close notification
  const closeHandler = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setOpen(false);
  };

  //Map type to icon
  let iconMap = new Map<
    NotificationProps["type"],
    { color: string; icon: React.ReactNode }
  >([
    ["info", { color: "blue", icon: <MdInfoOutline color="blue" /> }],
    ["error", { color: "red", icon: <MdHighlightOff color="red" /> }],
    ["success", { color: "green", icon: <MdCheckCircle color="green" /> }],
    ["warning", { color: "#F0A500", icon: <MdInfoOutline color="#F0A500" /> }],
  ]);


  //Notification component
  const comp = (
    <Card
      style={{
        zIndex: 100,
        ...positionConfig,
      }}
      animation={animationConfig}
    >
      <StyledNotification {...props}>
        <div className="header">
          {type ? (
            <span className="icon">{iconMap.get(type)?.icon}</span>
          ) : null}

          <p className="title">{props.title}</p>
          <a href="/" className="icon" onClick={closeHandler}>
            <MdClose />
          </a>
        </div>
        <div className="body">
          <p>{props.message}</p>
        </div>
      </StyledNotification>
    </Card>
  );

  return isOpen ? comp : null;
};

export default Notification;
