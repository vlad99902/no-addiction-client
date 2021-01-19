import React from "react";

import { Button } from "../components/Button";
import { Container } from "../components/Container";
import { Quote } from "../components/Quote";

export const InAddiction: React.FC = () => {
  return (
    <Container
      maxWidth="1600px"
      margin="0 auto"
      pos="center"
      style={{ flexDirection: "column" }}
      padding="18px 18px 0px"
    >
      <Quote author="Kirill" padding="60px">
        Каждый год в россии около 5000 людей в возрасте до 21 года умирают в
        ситуациях, связанных с алкоголем, — например, в авариях, бытовых
        убийствах, в результате отравления и других подобных травм.
      </Quote>
      <Button onClick={() => console.log("пизда")} type="smallText">
        Отказаться от алкоголя
      </Button>
    </Container>
  );
};
