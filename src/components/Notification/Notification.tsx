import React, { HTMLAttributes } from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import Card from "../Card";
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
    .close {
      font-size: 2rem;
      cursor: pointer;
    }
  }
  .body {
    line-height: 2rem;
  }
`;
interface NotificationProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  message: string;
  type: "info" | "success" | "error" | "warning";
  position?: "topLeft" | "topRight" | "bottomLeft" | "bottomRight";
  duration?: string;
}
interface PositionType {
  position: "absolute";
  [values: string]: string;
}
let colorMap = new Map<NotificationProps["type"], String>([
  ["info", "blue"],
  ["error", "red"],
  ["success", "green"],
  ["warning", "#f0a500"],
]);

const Notification = (props: NotificationProps) => {
  const { type, position = "topRight" } = props;
  let positionObj: PositionType = { position: "absolute" };
  switch (position) {
    case "topRight":
      positionObj.top = "3%";
      positionObj.right = "3%";
      break;
    case "topLeft":
      positionObj.top = "3%";
      positionObj.left = "3%";
      break;
    case "bottomLeft":
      positionObj.bottom = "3%";
      positionObj.left = "3%";
      break;
    case "bottomRight":
      positionObj.bottom = "3%";
      positionObj.right = "3%";
      break;
    default:
      break;
  }
  return (
    <Card
      style={{
        borderLeft: `4px solid ${colorMap.get(type)}`,
        zIndex:100,
        ...positionObj,
      }}
    >
      <StyledNotification {...props}>
        <div className="header">
          <p className="title">{props.title}</p>
          <a href="/" className="close">
            <MdClose />
          </a>
        </div>
        <div className="body">
          <p>{props.message}</p>
        </div>
      </StyledNotification>
    </Card>
  );
};

export default Notification;
