import styled from "styled-components";

type TitleTypes = {
  fz?: string;
  ff?: string;
  fw?: string;
  color?: string;
  mb?: string;
};

export const Title = styled.h1<TitleTypes>`
  font-size: ${(props) => props.fz};
  font-family: ${(props) =>
    props.ff || 'font-family: "Rubik Mono One", sans-serif'};
  font-weight: ${(props) => props.fw};
  color: ${(props) => props.color};
  margin-bottom: ${(props) => props.mb};
`;
