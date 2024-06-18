import React from 'react';

const Card = () => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 m-4">
            <img className="w-16 h-16 rounded-full mx-auto" src="avatar.jpg" alt="Avatar" />
            <div className="text-center mt-4">
                <p className="text-lg text-gray-900">John Doe</p>
                <p className="text-sm text-gray-400">Frontend Developer</p>
            </div>
            <div className="mt-6">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Contact
                </button>
            </div>
        </div>
    );
};

const App = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <Card />
        </div>
    );
};

export default App;