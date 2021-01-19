import React from "react";

import { Button } from "../components/Button";
import { Container } from "../components/Container";
import { Quote } from "../components/Quote";
import { CountDown } from "../containers/CountDown";
import { InAddiction } from "../containers/InAddiction";

export const MainPage: React.FC = () => {
  const inAddiction = false;
  if (inAddiction) return <InAddiction />;
  else return <CountDown />;
};
