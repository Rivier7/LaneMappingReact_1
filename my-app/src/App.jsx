import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './Components/Header';
import Edit from './pages/edit';

const App = () => {
  return (
    <Router>
              <Header />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Routes>
      <Route path="/edit" element={<Edit />} />

      </Routes>
    </Router>
  );
};

export default App;
