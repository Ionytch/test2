// import { Navigation } from '../Navigation/Navigation';
// import { UserMenu } from '../UserMenu/UserMenu';
// import { AuthNav } from '../AuthNav/AuthNav';
// import { useAuth } from 'hooks';
// import css from './AppBar.module.css';
import { AuthNav } from "components/authnav/AuthNav";
import { Navigation } from "components/navigation/Navigation";
import { Header } from "./AppBar.styled";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "redux/auth/selectors";
import { UserMenu } from "components/usermenu/UserMenu";

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Header >
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};
