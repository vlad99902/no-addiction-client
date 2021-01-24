import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

import { RootState } from '../store/rootReducer';
import { useSelector, useDispatch } from 'react-redux';
import { RecordsType, CurrentTimerType } from '../store/timers/timersTypes';
import { fetchDeleteTimer } from '../store/timers/timersActions';

import { getDurationNormalize } from '../functions/moment';
import { Container } from '../components/Container';
import { Title } from '../components/Title';
import { DeleteIcon } from '../assets/DeleteIcon';
import { colors } from '../styles/colors';
import { useCurrentDuration } from '../hooks/useCurrentDuration.hook';

export const RecordsPage: React.FC = () => {
  const records = useSelector((state: RootState) => state.timers.records);
  const currentActiveDate = useSelector(
    (state: RootState) => state.timers.currentTimer,
  );

  const currentRecordIndex = useSelector(
    (state: RootState) => state.timers.currentRecordIndex,
  );

  const [duration] = useCurrentDuration();
  const dispatch = useDispatch();

  const insert = (arr: any[], index: number, newItem: any) => [
    // part of the array before the specified index
    ...arr.slice(0, index),
    // inserted item
    newItem,
    // part of the array after the specified index
    ...arr.slice(index),
  ];

  const setRecordsToDom = (
    records: RecordsType,
    currentRecordIndex: number,
    currentActiveDate: CurrentTimerType,
    currentDur: moment.Duration,
  ) => {
    let content: any[] = [];
    let realLength: number = records.length;
    records.length > 9 ? (realLength = 10) : (realLength += 1);

    let newRecords: any[] = [];

    if (records) {
      newRecords = insert(records, currentRecordIndex, {
        recordId: currentActiveDate.timerId,
        beginDate: currentActiveDate.beginDate || '',
        endDate: currentActiveDate.endDate || '',
        duration: currentDur,
      });
    }

    for (let i = 0; i < realLength; i++) {
      if (newRecords[i].recordId !== -1)
        if (currentRecordIndex === i) {
          content.push(
            <TableElWrapper key={'CURRENT_DURATION'}>
              <Container display="flex" alignItems="flex-end">
                <Container style={{ width: '80px' }}>
                  <Title fz="32px" color={colors.$red}>
                    {i + 1}
                  </Title>
                </Container>
                <Title fz="22px" color={colors.$red}>
                  Current timer
                </Title>
                <Container style={{ marginLeft: 'auto' }}>
                  <Title fz="22px" color={colors.$red}>
                    {newRecords[i].duration &&
                      getDurationNormalize('full', newRecords[i].duration)}
                  </Title>
                </Container>
              </Container>
              <Line color={colors.$darkGray} />
            </TableElWrapper>,
          );
        } else {
          content.push(
            <TableElWrapper key={newRecords[i].recordId}>
              <Container display="flex" alignItems="flex-end">
                <Container style={{ width: '80px' }}>
                  <Title fz="32px">{i + 1}</Title>
                </Container>

                <Title fz="22px">
                  {moment(newRecords[i].endDate).format('YYYY-MM-DD HH:mm:ss')}
                </Title>

                <Container style={{ marginLeft: 'auto' }}>
                  <Title fz="22px">
                    {newRecords[i].duration &&
                      getDurationNormalize('full', newRecords[i].duration)}
                  </Title>
                </Container>

                <DeleteIconContainer
                  onClick={() =>
                    dispatch(fetchDeleteTimer(newRecords[i].recordId))
                  }
                >
                  <DeleteIcon />
                </DeleteIconContainer>
              </Container>
              <Line color={colors.$darkGray} />
            </TableElWrapper>,
          );
        }
    }

    return content;
  };

  return (
    <Container
      maxWidth="1600px"
      margin="0px auto 0px"
      padding="100px 18px 0px"
      height="calc(100vh - 99px)"
    >
      <Container maxWidth="800px" margin="0 auto">
        <Container display="flex" alignItems="flex-end">
          <Container style={{ width: '80px' }}>
            <Title color={colors.$darkGray} fz="24px">
              #
            </Title>
          </Container>
          <Title color={colors.$darkGray} fz="24px">
            End date
          </Title>
          <Container style={{ marginLeft: 'auto' }}>
            <Title color={colors.$darkGray} fz="24px">
              Duration
            </Title>
          </Container>
        </Container>
        <Line />
        {setRecordsToDom(
          records,
          currentRecordIndex,
          currentActiveDate,
          duration,
        )}
      </Container>
    </Container>
  );
};

const Line = styled.hr`
  border: 3px ${(props) => props.color || colors.$black} solid;
  border-radius: 6px;
  width: 100%;
  /* :last-child {
    border: 3px ${colors.$black} solid;
  } */
`;

const TableElWrapper = styled.div`
  position: relative;
`;

const DeleteIconContainer = styled.div`
  width: 16px;
  position: absolute;
  right: -30px;
  top: 16px;
  z-index: 1;
  cursor: pointer;
`;
