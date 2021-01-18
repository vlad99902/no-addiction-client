import React, { useState } from "react";

import styled from "styled-components";
import { Container } from "../components/Container";
import { Image } from "../components/Image";
import { colors } from "../styles/colors";

import logo from "../assets/logoNoAlco.png";
import profileIcon from "../assets/profileIcon.png";
import { Title } from "../components/Title";
import { SwitchButton } from "../components/SwitchButton";

export const PageHeader: React.FC = () => {
  const [position, setPosition] = useState(false);

  return (
    <Content>
      <Container
        maxWidth="1600px"
        margin="0 auto"
        pos="space-between"
        position="realative"
        padding="0 18px"
      >
        <Container style={{ backgroundColor: colors.$white }}>
          <Image src={logo} width="300px" />
        </Container>
        <Container
          position="absolute"
          style={{ left: "50%", transform: "translateX(-50%)" }}
          pos="space-between"
          maxWidth="600px"
        >
          <Title fz="36px">Сейчас я пью</Title>
          <Container margin="0 0 0 40px">
            <SwitchButton
              position={position}
              onClick={() => {
                setPosition(!position);
              }}
            />
          </Container>
        </Container>

        <Image src={profileIcon} width="100px" />
      </Container>
    </Content>
  );
};

const Content = styled.div`
  position: sticky;
  width: 100%;
  /* padding-top:100px; */
  height: 100px;
  background-color: ${colors.$gray};
`;
