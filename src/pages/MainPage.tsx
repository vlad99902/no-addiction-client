import React from "react";
import { useSelector } from "react-redux";

import { Button } from "../components/Button";
import { Container } from "../components/Container";
import { Quote } from "../components/Quote";
import { CountDown } from "../containers/CountDown";
import { InAddiction } from "../containers/InAddiction";
import { rootReducer, RootState } from "../store/rootReducer";

export const MainPage: React.FC = () => {
  const inAddiction = useSelector(
    (state: RootState) => state.users.inAddiction
  );
  console.log(inAddiction);

  if (inAddiction)
    return (
      <Container
        maxWidth="1600px"
        margin="100px auto 0px"
        pos="center"
        padding="18px 18px 0px"
        style={{ flexDirection: "column" }}
      >
        <InAddiction />
      </Container>
    );
  else
    return (
      <Container
        maxWidth="1600px"
        margin="0 auto"
        pos="center"
        padding="18px 18px 0"
      >
        <CountDown />
      </Container>
    );
};
