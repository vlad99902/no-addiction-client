import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useCurrentDuration } from '../hooks/useCurrentDuration.hook';
import { RootState } from '../store/rootReducer';

import styled from 'styled-components';
import { Container } from '../components/Container';
import { Title } from '../components/Title';

import moment from 'moment';
import { fetchDeleteTimer } from '../store/timers/timersActions';
import { DeleteIcon } from '../assets/DeleteIcon';
import { colors } from '../styles/colors';
import { getDurationNormalize } from '../functions/moment';

export const SetCurrentCounterToRecords: React.FC = () => {
  const records = useSelector((state: RootState) => state.timers.records);

  const currentRecordIndex = useSelector(
    (state: RootState) => state.timers.currentRecordIndex,
  );

  const currentActiveDate = useSelector(
    (state: RootState) => state.timers.currentTimer,
  );

  const [currentDur, str] = useCurrentDuration();
  const dispatch = useDispatch();

  // console.log(records);
  // .splice(currentRecordIndex, 0, {
  //   recordId: currentActiveDate.timerId,
  //   beginDate: currentActiveDate.beginDate || '',
  //   endDate: currentActiveDate.endDate || '',
  //   duration: currentDur,
  // })

  const [inserted, setInserted] = useState(false);

  console.log(inserted);

  const returnDom = (i: number, el: any) => {
    if (currentRecordIndex === i && !inserted) {
      console.log('here', i);
      setInserted(true);
      return (
        <>
          <Container style={{ width: '80px' }}>
            <Title fz="32px">{i + 1}</Title>
          </Container>
          <Title fz="22px">Still null, yet</Title>
          <Container style={{ marginLeft: 'auto' }}>
            <Title fz="22px">{str}</Title>
          </Container>
          <Container style={{ width: '80px' }}>
            <Title fz="32px">{i + 1}</Title>
          </Container>

          {/* <Title fz="22px">
            {moment(el.endDate).format('YYYY-MM-DD HH:mm:ss')}
          </Title>
          <Container style={{ marginLeft: 'auto' }}>
            <Title fz="22px">
              {el.duration && getDurationNormalize('full', el.duration)}
            </Title>
          </Container>
          <DeleteIconContainer
            onClick={() => dispatch(fetchDeleteTimer(el.recordId))}
          >
            <DeleteIcon />
          </DeleteIconContainer> */}
        </>
      );
    } else {
      return (
        <>
          <Container style={{ width: '80px' }}>
            <Title fz="32px">{i + 1}</Title>
          </Container>

          <Title fz="22px">
            {moment(el.endDate).format('YYYY-MM-DD HH:mm:ss')}
          </Title>

          <Container style={{ marginLeft: 'auto' }}>
            <Title fz="22px">
              {el.duration && getDurationNormalize('full', el.duration)}
            </Title>
          </Container>

          <DeleteIconContainer
            onClick={() => dispatch(fetchDeleteTimer(el.recordId))}
          >
            <DeleteIcon />
          </DeleteIconContainer>
        </>
      );
    }
  };

  return (
    <>
      {records.map((el, i) => {
        return (
          <TableElWrapper key={el.recordId}>
            <Container display="flex" alignItems="flex-end">
              {returnDom(i, el)}
            </Container>
            <Line color={colors.$darkGray} />
          </TableElWrapper>
        );
      })}
    </>
  );
};

const Line = styled.hr`
  border: 3px ${(props) => props.color || colors.$black} solid;
  border-radius: 6px;
  width: 100%;
  :last-child {
    border: 3px ${colors.$black} solid;
  }
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
