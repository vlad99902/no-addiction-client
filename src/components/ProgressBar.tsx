import styled from 'styled-components';
import { colors } from '../styles/colors';

interface IProgressBar {
  fill: number;
  maxFill?: number;
}

export const ProgressBar: React.FC<IProgressBar> = ({
  fill,
  maxFill = 100,
}) => {
  let currentColor = colors.$red;
  fill = (fill / maxFill) * 100;

  if (fill > 30) currentColor = colors.$orange;
  if (fill > 50) currentColor = colors.$yellow;
  if (fill > 65) currentColor = colors.$green;
  if (fill > 80) currentColor = colors.$blue;
  return (
    <Bar>
      <BarFill width={String(fill) + '%'} color={currentColor}></BarFill>
    </Bar>
  );
};

const Bar = styled.div`
  width: 100%;
  height: 15px;
  margin: 0px auto;
  border-radius: 10px;
  border: 2px solid ${colors.$gray};
  display: flex;
  position: relative;
`;

const BarSection = styled.div`
  left: 0;
  top: 0;
  height: 15px;
  position: absolute;
  width: 50px;
  border: 2px solid ${colors.$gray};
`;

const BarFill = styled.div<{ width: string; color: string }>`
  border-radius: 10px;
  width: ${(props) => props.width};
  background-color: ${(props) => props.color};
`;
