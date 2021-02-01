import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, Switch, useHistory } from 'react-router-dom';
import { DeleteIcon } from '../assets/DeleteIcon';
import { Container } from '../components/Container';
import { SecondButton } from '../components/SecondButton';
import { SettingsHeader } from '../components/SettingsHeader';
import { SettingsSection } from '../components/SettingsSection';
import { SwitchButton } from '../components/SwitchButton';
import { Title } from '../components/Title';
import { UserInfo } from '../components/UserInfo';
import { clearAuthSession } from '../store/users/usersActions';
import { colors } from '../styles/colors';

interface ISettingsPage {}

//TODO дрочим
export const SettingsPage: React.FC<ISettingsPage> = () => {
  return (
    <Container maxWidth="470px">
      <SettingsHeader />
      <UserInfo style={{ marginTop: '18px' }} />
      <SettingsSection
        title="Categories"
        marginTop="46px"
        description="Select categories would you like to see in the main screen"
      >
        <SecondButton design="switchOn" width="25%">
          Alcohol
        </SecondButton>
        <SecondButton
          design="switchOff"
          width="25%"
          style={{ marginLeft: '11px' }}
        >
          Drugs
        </SecondButton>
        <SecondButton
          design="switchOff"
          width="25%"
          style={{ marginLeft: '11px' }}
        >
          Smoking
        </SecondButton>
        <SecondButton
          design="switchOff"
          width="25%"
          style={{ marginLeft: '11px' }}
        >
          Masturbate
        </SecondButton>
      </SettingsSection>
      <SettingsSection
        title="Return last timer"
        marginTop="28px"
        description="If you stopped you current timer you can get it back"
      >
        <SecondButton design="normal">Return</SecondButton>
        <Container style={{ textAlign: 'right' }}>
          <Title ff="Alegreya Sans" fw="300">
            In category Alcohol Begin date 2020:10:01 12:23
          </Title>
          <Title ff="Alegreya Sans" fw="300">
            Stopped 2020:11:02 14:42
          </Title>
        </Container>
      </SettingsSection>
      <Container
        pos="space-between"
        alignItems="flex-start"
        justifyContent="flex-start"
        marginBottom="28px"
      >
        <SettingsSection
          title="Confirm window"
          style={{ margin: '28px 30px 0px 0px', maxWidth: '50%' }}
        >
          <SwitchButton backgroundColor={colors.$purple} />
        </SettingsSection>
        <SettingsSection title="Dark theme" marginTop="28px">
          <SwitchButton backgroundColor={colors.$purple} />
        </SettingsSection>
      </Container>
      <Title fz="32px" ff="Alegreya Sans" fw="500">
        About us
      </Title>
      <Link to="/">
        <Title ff="Alegreya Sans" fz="24px" color={colors.$gray} fw="300">
          Terms and conditions
        </Title>
      </Link>
    </Container>
  );
};
