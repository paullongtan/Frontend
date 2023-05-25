import Show from './components/Home';
import Navbar from './components/Navbar';
import SignIn from './components/Login';
import SignUp from './components/SignUp';
import Information from './components/Information';
import Seat from './containers/Seat';
import React from 'react';
import Time from './containers/Time'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import './App.css';
import { Routes, Route, Outlet } from "react-router-dom";
import { useInfo } from './containers/hooks/useInfo';

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
                <CustomButton onClick={() => {navigate(".")}}>電影介紹</CustomButton>
                <CustomButton onClick={() => {navigate("./time")}}>電影時刻</CustomButton>
            </div>
            <Outlet />
        </div>
    );
  };

  const { getAllMovies } = useInfo()
  const allmovies = getAllMovies()

  return (
    <>
      <Navbar />
      <Routes>
          <Route path="/" element={<Show />} />
          {allmovies.map((ele, i) => (
            <Route key={4*i} path={`/${ele.movie_id}/*`} element={<Root />}>
              <Route key={4*i+1} index element={<Information />} />
              <Route key={4*i+2} path="time" element={<Time />} />
              <Route key={4*i+3} path="book" element={<Seat />} />
            </Route>
          ))}
          <Route path="/LogIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          
      </Routes>
    </>
  );
}

export default App;
