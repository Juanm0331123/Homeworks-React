import { useState } from 'react';

export const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes manejar el inicio de sesión
        console.log(`Iniciando sesión con usuario: ${username} y contraseña: ${password}`);
    }

    return (
        <div>
            <h1>LoginPage</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Usuario:
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>
                <label>
                    Contraseña:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <input type="submit" value="Iniciar sesión" />
            </form>
        </div>
    )
}