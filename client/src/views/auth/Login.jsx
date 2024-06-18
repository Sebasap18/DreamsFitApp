// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react'

const inputClasses = 'w-full p-2 border border-zinc-300 rounded-md'
const textClasses = 'text-zinc-300'
const buttonClasses = 'w-full bg-green-700 text-white p-2 rounded-md hover:bg-green-800'
const linkClasses = 'hover:text-white'


const LoginPage = () => {
    return (
        <div className="bg-zinc-200 flex items-center justify-center h-screen">
            <LoginForm/>
        </div>
    )
}
const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(username);
        console.log(password);
        // Aquí deberías realizar la lógica para autenticar al usuario
        // Simulación de autenticación:
        //  onLogin(username);
    };
    return (
        <div className="bg-green-900 p-8 rounded-lg shadow-lg max-w-sm w-full">
            <div className="mb-6">
                <img src="https://placehold.co/300x200" alt="Gym background" className="rounded-lg"/>
            </div>
            <h2 className="text-white text-2xl font-bold mb-6">BIENVENIDO A DREAMSFIT</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="email" className={`block text-sm font-medium ${textClasses} mb-1`}>
                        Ingrese su usuario de ingreso
                    </label>
                    <input type="email"
                           id="email"
                           value={username}
                           onChange={(e) => setUsername(e.target.value)}
                           className={inputClasses} placeholder="example@123.com"/>
                </div>
                <div className="mb-6">
                    <label htmlFor="password"
                           className={`block text-sm font-medium ${textClasses} mb-1`}>
                        Ingrese su contraseña
                    </label>
                    <input
                        type="password"
                        id="password"
                        className={inputClasses}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button type="submit" className={buttonClasses}>
                    Ingresar
                </button>
                <div className="flex justify-between items-center mt-4 text-sm text-zinc-300">
                    <a href="#" className={linkClasses}>
                        ¿Olvido su contraseña?
                    </a>
                    <a href="#" className={linkClasses}>
                        Registrarse
                    </a>
                </div>
            </form>
        </div>
    )
}


export default LoginPage
