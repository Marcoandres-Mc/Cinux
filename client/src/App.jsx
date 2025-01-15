import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Home from './Home'; // Asegúrate de que la ruta es correcta
import Login from './pages/Login';
import Register from './pages/Register';
import { Provider } from 'react-redux';


const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/login" element={<Login />} /> 
          <Route path="/register" element={<Register />} /> 
          <Route path="/home/*" element={
              <Home/>
          }/>
          <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
    </Router>
  );
};

export default App;
