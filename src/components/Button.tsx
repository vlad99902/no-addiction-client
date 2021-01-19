import React from "react";

import { colors } from "../styles/colors";

type TypeOfType = "main" | "smallText" | "oneWordOneLine";

type ButtonType = {
  children: React.ReactNode;
  type?: TypeOfType;
  onClick(): void;
};

export const Button: React.FC<ButtonType> = ({
  children,
  type = "main",
  onClick,
}) => {
  const setNewLines = (children: React.ReactNode): React.ReactNode => {
    const line = String(children).trim();
    const resArray: Array<JSX.Element> = [];

    line.split(" ").forEach((word, i) => {
      resArray.push(<p key={i}>{word.trim()}</p>);
    });

    return <>{resArray.map((el) => el)}</>;
  };

  return (
    <div style={{ ...style, ...styleType(type) }} onClick={onClick}>
      {type === "oneWordOneLine" ? setNewLines(children) : children}
    </div>
  );
};

const styleType = (type: string): React.CSSProperties => {
  switch (type) {
    case "smallText":
      return {
        fontSize: "24px",
        textAlign: "center",
        padding: "24px 52px",
      };
    case "oneWordOneLine":
      return {
        fontSize: "24px",
        textAlign: "center",
        display: "table-caption",
        padding: "24px 52px",
      };
    default:
      return {
        fontSize: "72px",
      };
  }
};

const style: React.CSSProperties = {
  backgroundColor: colors.$black,
  color: colors.$red,
  cursor: "pointer",
  userSelect: "none",

  border: "none",
  borderRadius: "20px",
  padding: "6px 52px",
  fontSize: "72px",
};
