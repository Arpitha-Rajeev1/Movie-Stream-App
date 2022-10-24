import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Detail from './components/Detail';
import Login from './components/Login';
import { useSelector } from 'react-redux';
import { selectUserName } from './features/user/userSlice';
import PageNotFound from './components/PageNotFound';

function App() {
  const userName = useSelector(selectUserName);

  return (
    <BrowserRouter>
      <Header />
      {!userName ? (
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
