import React from 'react';
import styled from 'styled-components';
import { colors } from '../styles/colors';

interface INotice {}

export const Notice: React.FC<INotice> = () => {
  return <Wrapper />;
};

const Wrapper = styled.div`
  width: 60%;
  height: 100%;
  border: 2px solid ${colors.$gray};
  position: absolute;
  top: 0;
  right: -65%;
  border-radius: 16px;
`;
