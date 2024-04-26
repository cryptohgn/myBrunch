
import { Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import CoffeeList from './page-components/CoffeeList';
import Login from './page-components/Login';

function App() {

  const [isLogged, setIsLogged] = useState(false);

  return (
    <>
  return (
    <Router>
      <Routes>
       <Route path="/login" element={<Login setIsLogged={setIsLogged} />} />
       <Route path="/coffees" element={setIsLogged ? <CoffeeList/> : <Navigate to="/login" />} />
       <Route path="/" element={<Navigate to="/login" />} /> 
      </Routes>
    </Router>
  );

    </>
  )
}




export default App
