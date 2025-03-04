import React from "react";
import './App.css'
import { Routes, BrowserRouter, Route } from 'react-router-dom'
import Home from "./components/pages/Home";
import Signup from "./components/pages/Signup";

import AuthProvider from "react-auth-kit";
import createStore from "react-auth-kit/createStore";
import RequireAuth from '@auth-kit/react-router/RequireAuth'
import { refresh } from "./RefreshToken";
import Signin from "./components/pages/Signin";

const App = () => {
  const store = createStore({
    authName: '_auth',
    authType: 'cookie',
    cookieDomain: window.location.hostname,
    cookieSecure: window.location.protocol === 'https:',
    refresh: refresh
  });
  return <>


    <AuthProvider store={store}>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>



  </>;
};

export default App;

