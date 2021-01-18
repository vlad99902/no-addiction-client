import React from "react";

import styled from "styled-components";
import { Container } from "../components/Container";
import { Image } from "../components/Image";
import { colors } from "../styles/colors";

import logo from "../assets/logoNoAlco.png";

export const PageHeader: React.FC = () => {
  return (
    <Content>
      <Container maxWidth="1600px"></Container>
      <Container>
        <Image src={logo} />
      </Container>
    </Content>
  );
};

const Content = styled.div`
  position: sticky;
  width: 100%;
  height: 100px;
  background-color: ${colors.$gray};
`;
