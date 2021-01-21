import React from 'react';
import styled from 'styled-components';
import { colors } from '../styles/colors';
import moment from 'moment';
import { getDurationNormalize } from '../functions/moment';

import { RootState } from '../store/rootReducer';
import { useSelector } from 'react-redux';

import { Container } from '../components/Container';
import { Title } from '../components/Title';

export const RecordsPage: React.FC = () => {
  const records = useSelector((state: RootState) => state.timers.records);

  return (
    <Container
      maxWidth="1600px"
      margin="100px auto 0px"
      padding="18px 18px 0px"
    >
      <Container maxWidth="800px" margin="0 auto">
        <Container pos="space-between">
          <Title color={colors.$darkGray} fz="24px">
            #
          </Title>
          <Title color={colors.$darkGray} fz="24px">
            Start date
          </Title>
          <Title color={colors.$darkGray} fz="24px">
            Duration
          </Title>
        </Container>
        <Line />
        {records.map((record, i) => {
          // console.log(record.duration);
          return (
            <div key={record.recordId}>
              <Container pos="space-between" alignItems="flex-end">
                <Title fz="32px">{i + 1}</Title>
                <Title fz="22px">
                  {moment(record.beginDate).format('YYYY-MM-DD HH:mm:ss')}
                </Title>
                <Title fz="22px">
                  {record.duration &&
                    getDurationNormalize('full', record.duration)}
                </Title>
              </Container>

              <Line color={colors.$darkGray} />
            </div>
          );
        })}
        <Line />
      </Container>
    </Container>
  );
};

const Line = styled.hr<{ color?: string }>`
  border: 3px ${(props) => props.color || colors.$black} solid;
  border-radius: 6px;
  width: 100%;
  /* :last-child {
    display: none;
  } */
`;
