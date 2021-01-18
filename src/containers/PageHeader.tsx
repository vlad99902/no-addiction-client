import React from "react";

import styled from "styled-components";
import { Container } from "../components/Container";
import { Image } from "../components/Image";
import { colors } from "../styles/colors";

import logo from "../assets/logoNoAlco.png";
import profileIcon from "../assets/profileIcon.png";
import { Title } from "../components/Title";

export const PageHeader: React.FC = () => {
  return (
    <Content>
      <Container
        maxWidth="1600px"
        margin="0 auto"
        pos="space-between"
        position="realative"
      >
        <Image src={logo} width="300px" margin="0px 0px 0px 40px" />
        <Container
          position="absolute"
          style={{ left: "50%", transform: "translateX(-50%)" }}
          pos="space-between"
          maxWidth="600px"
        >
          <Title fz="36px">Сейчас я пью</Title>
          <Container margin="0 0 0 40px">КНОП</Container>
        </Container>
        <Image src={profileIcon} width="100px" margin="0px 40px 0px 0px" />
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