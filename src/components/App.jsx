import React from 'react';
// import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Layout } from '../components/Layout/Layout';

// import { PrivateRoute } from '../routes/PrivateRoute';
// import { RestrictedRoute } from '../routes/RestrictedRoute';

// const Home = lazy(() => import('../pages/Home/Home'));
// const Register = lazy(() => import('../pages/Register/Register'));
// const Login = lazy(() => import('../pages/Login/Login'));
// const Contacts = lazy(() => import('../pages/PhoneBook/PhoneBook'));
import { Home } from '../pages/Home/Home';
import { Register } from '../pages/Register/Register';
import { Login } from '../pages/Login/Login';
import { Contacts } from '../pages/PhoneBook/PhoneBook';

export const App = () => {
  return (
    <Routes>
      <Route path="/goit-react-hw-08-phonebook/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/goit-react-hw-08-phonebook/register"
          element={<Register />}
        />
        <Route path="/goit-react-hw-08-phonebook/login" element={<Login />} />
        <Route
          path="/goit-react-hw-08-phonebook/contacts"
          element={<Contacts />}
        />
      </Route>
    </Routes>
  );
};
