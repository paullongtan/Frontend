import logo from './logo.svg';
import Show from './components/Home';
import Navbar from './components/Navbar';
import SignIn from './components/Login';
import SignUp from './components/SignUp';
import Information from './components/Information';
import Seat from './components/Seat';
import React from 'react';
import Time from './components/Time'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import { Routes, Route, Outlet } from "react-router-dom";

const CustomButton = styled.button`
      background-color: #5E5E5E;
      color: white;
      margin: 0 10px;
      padding: 10px 20px;
      font-size: 16px;
      border: none;
      outline: none;
      cursor: pointer;
`;

function App() {
  const Root = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div style={{ display: 'flex', backgroundColor: "#5E5E5E" }}>
                <CustomButton onClick={() => {navigate("./")}}>電影介紹</CustomButton>
                <CustomButton onClick={() => {navigate("./time")}}>電影時刻</CustomButton>
            </div>
            <Outlet />
        </div>
    );
  };

  return (
    <>
      <Navbar />
      <Routes>
          <Route path="/" element={<Show />} />
          <Route path="/aqua/*" element={<Root />}>
            <Route index element={<Information />} />
            <Route path="time" element={<Time />} />
          </Route>
          <Route path="/avengers/*" element={<Root />}>
            <Route index element={<Information />} />
            <Route path="time" element={<Time />} />
          </Route>
          <Route path="/fast/*" element={<Root />}>
            <Route index element={<Information />} />
            <Route path="time" element={<Time />} />
          </Route>
          <Route path="/monkey/*" element={<Root />}>
            <Route index element={<Information />} />
            <Route path="time" element={<Time />} />
          </Route>
          <Route path="/matrix/*" element={<Root />}>
            <Route index element={<Information />} />
            <Route path="time" element={<Time />} />
          </Route>
          <Route path="/LogIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/book" element={<Seat />} />
      </Routes>
    </>
  );
}

export default App;
