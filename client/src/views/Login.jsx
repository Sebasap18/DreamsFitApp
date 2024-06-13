// eslint-disable-next-line no-unused-vars
import React from 'react'

const inputClasses = 'w-full p-2 border border-zinc-300 rounded-md'
const textClasses = 'text-zinc-300'
const buttonClasses = 'w-full bg-green-700 text-white p-2 rounded-md hover:bg-green-800'
const linkClasses = 'hover:text-white'

const LoginForm = () => {
    return (
        <div className="bg-green-900 p-8 rounded-lg shadow-lg max-w-sm w-full">
            <div className="mb-6">
                <img src="https://placehold.co/300x200" alt="Gym background" className="rounded-lg"/>
            </div>
            <h2 className="text-white text-2xl font-bold mb-6">BIENVENIDO A DREAMSFIT</h2>
            <form>
                <div className="mb-4">
                    <label htmlFor="email" className={`block text-sm font-medium ${textClasses} mb-1`}>
                        Ingrese su usuario de ingreso
                    </label>
                    <input type="email" id="email" className={inputClasses} placeholder="example@123.com"/>
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className={`block text-sm font-medium ${textClasses} mb-1`}>
                        Ingrese su contraseña
                    </label>
                    <input type="password" id="password" className={inputClasses} placeholder="Password"/>
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

const LoginPage = () => {
    return (
        <div className="bg-zinc-200 flex items-center justify-center h-screen">
            <LoginForm/>
        </div>
    )
}

export default LoginPage
