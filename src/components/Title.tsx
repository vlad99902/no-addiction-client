import styled from 'styled-components';

type TitleTypes = { fz?: string; ff?: string; fw?: string; color?: string };

export const Title = styled.h1<TitleTypes>`
  font-size: ${(props) => props.fz};
  font-family: ${(props) => props.ff};
  font-weight: ${(props) => props.fw};
  color: ${(props) => props.color};
`;
