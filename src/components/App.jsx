// import {Phonebook} from "./phonebook/Phonebook";
// import Contacts from "./contacts/Contacts";
// import { Filter } from "./filter/Filter";
import { useSelector, useDispatch } from "react-redux";
// import { fetchContacts } from "redux/operations";
import { lazy, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import { PageNotFound } from "pages/Notfound";
import { RestrictedRoute } from "./RestrictedRoute";
import { PrivateRoute } from "./PrivatRoute";
import { selectIsRefreshing } from "redux/auth/selectors";
import { refreshUser } from "redux/auth/operations";

const Homepage=lazy(()=>import ('../pages/Homepage')); 
const Register=lazy(()=>import ('../pages/Register'));
const Login=lazy(()=>import ('../pages/Login'));
const PhoneContacts=lazy(()=>import ('../pages/PhoneContacts'));

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
 
  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) :(
      <>
        <Routes>
          <Route path="/" element={<Layout />} >
          <Route index element={<Homepage />} />
        <Route path="/register" element={<RestrictedRoute redirectTo="/phonecontacts" component={<Register />}/>} />
        <Route path="/login" element={<RestrictedRoute redirectTo="/phonecontacts" component={<Login />}/>} />
        <Route path="/phonecontacts" element={<PrivateRoute redirectTo="/login" component={<PhoneContacts />}/>} />
          <Route path="*" element={<PageNotFound />} /> 
          </Route>
      </Routes>
      </>
            
    );
  }

