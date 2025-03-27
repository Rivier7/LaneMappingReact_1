import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './Components/Header';
import Edit from './pages/edit';
import Accounts from './pages/Accounts';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/Accounts" element={<Accounts />} />
      </Routes>
    </Router>
  );
};

export default App;
