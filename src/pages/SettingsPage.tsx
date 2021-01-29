import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { DeleteIcon } from '../assets/DeleteIcon';
import { Container } from '../components/Container';
import { Title } from '../components/Title';
import { clearAuthSession } from '../store/users/usersActions';

interface ISettingsPage {}

//TODO дрочим
export const SettingsPage: React.FC<ISettingsPage> = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <Container style={{ display: 'flex', flexDirection: 'column' }}>
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
    </Container>
  );
};
