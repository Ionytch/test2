// import { NavLink } from 'react-router-dom';
// import { useAuth } from 'hooks';
// import css from './Navigation.module.css';

import { Link } from "components/layout/Layout.styled";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "redux/auth/selectors";

export const Navigation = () => {
  const isLoggedIn  = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <Link  to="/">
        Home
      </Link>
      {isLoggedIn && (
        <Link to="/phonecontacts">
          Contacts
        </Link>
      )}
    </nav>
  );
};