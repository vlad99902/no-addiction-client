import React from "react";

import styled from "styled-components";

import { colors } from "../styles/colors";

type TypeOfType = "small" | "medium" | "large";

interface ISwitchButton {
  onClick(): void;
  type?: TypeOfType;
  position: boolean;
}
type Position = {
  backgroundColor?: string;
  flexDirection?: string;
};

export const SwitchButton: React.FC<ISwitchButton> = ({
  onClick,
  type = "small",
  position,
}) => {
  const getSwitchButtonPropStyles = (): { [key: string]: string } => {
    if (position) {
      return {
        flexDirection: "row-reverse",
        backgroundColor: colors.$red,
      };
    } else
      return {
        flexDirection: "row",
        backgroundColor: colors.$gray,
      };
  };

  return (
    <MainPart
      flexDirection={getSwitchButtonPropStyles().flexDirection}
      onClick={() => onClick()}
    >
      <Selector
        backgroundColor={getSwitchButtonPropStyles().backgroundColor}
      ></Selector>
    </MainPart>
  );
};

const MainPart = styled.button<Position>`
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

const Selector = styled.div<Position>`
  height: 30px;
  width: 30px;
  border-radius: 100%;
  background-color: ${(props) => props.backgroundColor};
  margin: 0 3px;
`;