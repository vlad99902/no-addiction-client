import { useDispatch } from 'react-redux';
import { Switch, useHistory } from 'react-router-dom';
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
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <Container>
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
        description="If  you stopped you current timer you can get it back"
      >
        <SecondButton design="normal">Return</SecondButton>
        <Container>
          <Title ff="Alegreya Sans" fw="300">
            In category Alcohol Begin date 2020:10:01 12:23
          </Title>
          <Title ff="Alegreya Sans" fw="300">
            Stopped 2020:11:02 14:42
          </Title>
        </Container>
      </SettingsSection>
      <SettingsSection
        title="Confirm window"
        marginTop="28px"
        description="If  you want to delete or change something you’ll see modal confirm window"
      >
        <SwitchButton backgroundColor={colors.$purple} />
      </SettingsSection>
    </Container>
  );
};

{
  /*<Container style={{ display: 'flex', flexDirection: 'column' }}>
      <Container
        pos="space-between"
        marginBottom="36px"
        alignItems="flex-start"
      >
        <Title>Настройки</Title>
        <Container width="18px" onClick={history.goBack}>
          <DeleteIcon />
        </Container>
      </Container>
      <Container
        pos="space-between"
        marginBottom="36px"
        alignItems="flex-start"
      >
        <Title>Язык</Title>
        <Title>русский</Title>
      </Container>
      <Container
        pos="space-between"
        marginBottom="36px"
        alignItems="flex-start"
      >
        <Title>Категории</Title>
        <Container>
          <Title mb="6px">no drugs</Title>
          <Title mb="6px">no smoke</Title>
          <Title>no alco</Title>
        </Container>
      </Container>
      <Container
        pos="space-between"
        marginBottom="36px"
        alignItems="flex-start"
      >
        <Container
          onClick={() => {
            dispatch(clearAuthSession());
          }}
          style={{ cursor: 'pointer' }}
        >
          выйти
        </Container>
      </Container>
				</Container>*/
}
