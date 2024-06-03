import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivateLayout from './components/privateLayout';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import DashboardPage from './components/DashboardPage';
import { UserContext } from './store/userContext';
import { useState } from 'react';

function App() {
  // Aquí debes definir el estado y la función para actualizarlo

  const [state, setState] = useState({ isLoggedIn: false });

  return (
    <UserContext.Provider value={{ state, setState }}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={
            <PrivateLayout>
              <DashboardPage />
            </PrivateLayout>
          } />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;