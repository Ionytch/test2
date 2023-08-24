import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
} from 'redux/auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
    const user = useSelector(selectUser);
    
    console.log(user);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};


// import { useSelector } from 'react-redux';

// export const useAuth = () => {
//   const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
//   const isRefreshing = useSelector(state => state.auth.isRefreshing);
//   const user = useSelector(state => state.auth.user);

//   return {
//     isLoggedIn,
//     isRefreshing,
//     user,
//   };
// };