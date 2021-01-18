import React from "react";

import styled from "styled-components";
import { colors } from "../styles/colors";

export const PageHeader: React.FC = () => {
  return <Content></Content>;
};

const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100px;
  background-color: ${colors.$gray};
`;
