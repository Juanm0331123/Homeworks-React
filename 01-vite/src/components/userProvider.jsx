import { UserContext, UserReducer } from './userReducer';
import PropTypes from 'prop-types';
import React, { useReducer } from 'react'; // Import the 'useReducer' hook from the 'react' package

export const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(UserReducer, { user: null, isLoggedIn: false });

    return (
        <UserContext.Provider value={{ state, dispatch }}>
            {children}
        </UserContext.Provider>
    );
};

UserProvider.propTypes = {
    children: PropTypes.node.isRequired
};