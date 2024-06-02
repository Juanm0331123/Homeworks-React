import { useContext } from 'react';
import { UserContext } from '../Components/Context/UserContext';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
    const { user, login } = useContext(UserContext);

    const navigate = useNavigate();

    const onLogin = () => {
        login({
            id: 123,
            name: 'Juan Miguel Leon',
            email: 'juanmiguelleon43@gmail.com'
        });

        const lastPath = localStorage.getItem('lastPath') || '/';
        navigate(lastPath, {
            replace: true
        });
    };

    return (
        <>
            <div>Login Page</div>
            <pre>
                {JSON.stringify(user, null, 3)}
            </pre>

            <button className='btn btn-primary' onClick={onLogin}>
                Login
            </button>
        </>
    );
};