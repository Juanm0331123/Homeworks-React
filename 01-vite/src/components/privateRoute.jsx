import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../store/userContext';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

const PrivateRoute = ({ path, element }) => {
  const { state } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!state.isLoggedIn) {
      navigate('/login');
    }
  }, [state.isLoggedIn, navigate]);

  return <Route path={path} element={state.isLoggedIn ? element : null} />;
};

PrivateRoute.propTypes = {
  path: PropTypes.string.isRequired,
  element: PropTypes.element.isRequired,
};

export default PrivateRoute;