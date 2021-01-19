import React from "react";

import { Button } from "../components/Button";
import { Quote } from "../components/Quote";

export const InAddiction: React.FC = () => {
  return (
    <>
      <Quote author="Kirill" marginBottom="60px">
        Каждый год в россии около 5000 людей в возрасте до 21 года умирают в
        ситуациях, связанных с алкоголем, — например, в авариях, бытовых
        убийствах, в результате отравления и других подобных травм.
      </Quote>
      <Button onClick={() => console.log("click")} type="smallText">
        Отказаться от алкоголя
      </Button>
    </>
  );
};
