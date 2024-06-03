import { useContext } from 'react';
import { UserContext } from '../store/userContext';

const DashboardPage = () => {
  const { state, setState } = useContext(UserContext);

  const handleLogout = () => {
    setState(prevState => ({ ...prevState, isLoggedIn: false, username: '' }));
  };

  return (
    <div>
      <h1>Dashboard Page</h1>
      <p>Welcome, {state.username}! You are logged in.</p>
      <button onClick={handleLogout}>Log out</button>
    </div>
  );
};

export default DashboardPage;