import { useContext } from 'react';
import { UserContext } from './UserContext';

const SomeComponent = () => {
  const { state, dispatch } = useContext(UserContext);

  const handleLogin = () => {
    dispatch({ type: 'LOGIN', payload: { name: 'User' } });
  };

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <div>
      {state.isLoggedIn ? (
        <>
          <p>Welcome, {state.user.name}!</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
};

export default SomeComponent;