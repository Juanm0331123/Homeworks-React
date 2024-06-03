import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../store/userContext';

import PropTypes from 'prop-types';

const PrivateLayout = ({ children }) => {
    const { state } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!state.isLoggedIn) {
            navigate('/login');
        }
    }, [state.isLoggedIn, navigate]);

    return state.isLoggedIn ? children : null;
};

PrivateLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PrivateLayout;