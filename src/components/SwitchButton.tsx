import React from "react";

import styled from "styled-components";
import { colors } from "../styles/colors";

type TypeOfType = "small" | "medium" | "large";

interface ISwitchButton {
  onClick?(): void;
  type?: TypeOfType;
  position: boolean;
}

export const SwitchButton: React.FC<ISwitchButton> = ({
  onClick,
  type = "small",
  position,
}) => {
  let flexDirection;
  switch (position) {
    case true:
      flexDirection = "row-reverse";
      break;
    case false:
      flexDirection = "row";
      break;
    default:
      flexDirection = "row";
  }

  return (
    <MainPart flexDirection={flexDirection} onClick={onClick}>
      <Selector></Selector>
    </MainPart>
  );
};

const MainPart = styled.button<{ flexDirection: string }>`
  width: 70px;
  height: 36px;
  border-radius: 25px;
  background-color: ${colors.$white};
  border: none;
  display: flex;
  align-items: center;
  padding: 0;
  flex-direction: ${(props) => props.flexDirection};
`;

const Selector = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 100%;
  background-color: ${colors.$gray};
  margin: 0 3px;
`;

// const Position = (pos: boolean | undefined): React.CSSProperties => {
//   switch (pos) {
//     case true:
//       return { flexDirection: "row-reverse" };
//     case false:
//       return { flexDirection: "row" };
//     default:
//       return { flexDirection: "row" };
//   }
// };
