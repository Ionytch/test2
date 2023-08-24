// import { NavLink } from 'react-router-dom';
import { Link } from 'components/layout/Layout.styled';
// import css from './AuthNav.module.css';
// import { AuthLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <div>
      <Link  to="/register">
        Register
      </Link>
      <Link  to="/login">
        Log In
      </Link>
    </div>
  );
};