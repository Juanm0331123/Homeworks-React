import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../store/userContext';

const LoginPage = () => {
  const { setState } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    setState(prevState => ({ ...prevState, isLoggedIn: true }));

    navigate('/dashboard');
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Log in</button>
    </div>
  );
};

export default LoginPage;