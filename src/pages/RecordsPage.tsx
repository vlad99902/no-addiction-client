import React from 'react';
import styled from 'styled-components';
import { colors } from '../styles/colors';
import moment from 'moment';
import { getDurationNormalize } from '../functions/moment';

import { RootState } from '../store/rootReducer';
import { useSelector, useDispatch } from 'react-redux';

import { Container } from '../components/Container';
import { Title } from '../components/Title';
import { useCurrentDuration } from '../hooks/useCurrentDuration.hook';
import { DeleteIcon } from '../assets/DeleteIcon';
import { fetchDeleteTimer } from '../store/timers/timersActions';

const RecordsPage: React.FC = () => {
  const records = useSelector((state: RootState) => state.timers.records);

  const [duration, str] = useCurrentDuration();
  const dispatch = useDispatch();

  // console.log(duration, str);

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
            Start date
          </Title>
          <Container style={{ marginLeft: 'auto' }}>
            <Title color={colors.$darkGray} fz="24px">
              Duration
            </Title>
          </Container>
        </Container>
        <Line />
        {records.map((record, i) => {
          return (
            <TableElWrapper key={record.recordId}>
              <Container display="flex" alignItems="flex-end">
                <Container style={{ width: '80px' }}>
                  <Title fz="32px">{i + 1}</Title>
                </Container>

                <Title fz="22px">
                  {moment(record.beginDate).format('YYYY-MM-DD HH:mm:ss')}
                </Title>

                <Container style={{ marginLeft: 'auto' }}>
                  <Title fz="22px">
                    {record.duration &&
                      getDurationNormalize('full', record.duration)}
                  </Title>
                </Container>

                <DeleteIconContainer
                  onClick={() => dispatch(fetchDeleteTimer(record.recordId))}
                >
                  <DeleteIcon />
                </DeleteIconContainer>
              </Container>
              <Line color={colors.$darkGray} />
            </TableElWrapper>
          );
        })}
      </Container>
    </Container>
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

export default React.memo(RecordsPage);
