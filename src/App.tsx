import React from 'react';

import { Route, Routes } from 'react-router-dom';

import './App.css';
import './index.css';
import {
  HomePage,
  SingInPage,
  SignUpByEmail,
  SignUpByApple,
  SignUpPage,
} from './pages';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/email' element={<SignUpByEmail />}></Route>
      <Route path='/apple' element={<SignUpByApple />}></Route>
      <Route path='/signup' element={<SignUpPage />}></Route>
      <Route path='/signin' element={<SingInPage />}></Route>
      <Route path='*' element={'Eror 404'}></Route>
    </Routes>
  );
};

export default App;
