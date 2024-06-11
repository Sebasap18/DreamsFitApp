import React from 'react';

const INPUT_CLASS = "block w-full bg-zinc-100 p-2 rounded border border-zinc-300";
const BUTTON_CLASS = "w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded";

const TrainerOption = ({ name, fullName, specialty }) => (
    <option>{`${name} | ${fullName} | ${specialty}`}</option>
);

const TrainerSelect = () => (
    <select id="trainer" className={INPUT_CLASS}>
        <TrainerOption name="Entrenador 1" fullName="Nombre completo 1" specialty="Especialidad Deportiva" />
        <TrainerOption name="Entrenador 2" fullName="Nombre completo 2" specialty="Especialidad Deportiva" />
        <TrainerOption name="Entrenador 3" fullName="Nombre completo 3" specialty="Especialidad Deportiva" />
        <TrainerOption name="Entrenador 4" fullName="Nombre completo 4" specialty="Especialidad Deportiva" />
    </select>
);

const DateTimeInput = () => (
    <input type="datetime-local" id="datetime" className={INPUT_CLASS} />
);

const AgendaComponent = () => {
    return (
        <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-4">
            <div className="bg-green-500 p-4 text-white text-center font-bold text-xl">
                AGENDA TU SESION DE ENTRENAMIENTO
            </div>
            <div className="p-4">
                <div className="mb-4">
                    <label htmlFor="trainer" className="block text-sm font-semibold mb-2">Selecciona tu entrenador de preferencia</label>
                    <TrainerSelect />
                </div>
                <div className="mb-4">
                    <label htmlFor="datetime" className="block text-sm font-semibold mb-2">Selecciona la fecha y hora de la sesion</label>
                    <DateTimeInput />
                </div>
                <button className={BUTTON_CLASS}>
                    Programar Sesion
                </button>
            </div>
        </div>
    );
};

export default AgendaComponent;