import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { UserName, Wrapper } from './UserMenu.styled';
import { logOut } from 'redux/auth/operations';
// import { useAuth } from 'hooks';
// import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const  user  = useSelector(selectUser);

  return (
    <Wrapper >
      <UserName >Welcome, {user.email}</UserName>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </Wrapper>
  );
};
