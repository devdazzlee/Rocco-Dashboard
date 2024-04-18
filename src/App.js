import { useState } from 'react';
import './App.css';
import Main_Page from './Components/MainPage/Main';
import './index.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './Components/Login/Login';
import Nested_page from './Components/Inner_component/Nested_page';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Simulated login logic (replace with your actual authentication logic)
    // For this example, let's say the user is considered logged in if isLoggedIn state is set to true
    setIsLoggedIn(true);
  };



  return (
<>
<Router>
        <Routes>
        <Route
          path="/"
          element={isLoggedIn ? <Main_Page /> : <LoginPage onLogin={handleLogin} />}
        />
  <Route
          path="/detail"
          element={ <Nested_page/>}
        />


        </Routes>
      </Router>
</>
  );
}

export default App;
