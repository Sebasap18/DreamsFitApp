import React from 'react';

const INPUT_CLASS = 'w-full px-3 py-2 border rounded';
const BUTTON_CLASS = 'bg-green-600 text-white px-4 py-2 rounded focus:outline-none hover:bg-green-700';

const PaymentForm = () => {
    return (
        <div className="bg-zinc-200 p-4 font-sans">
            <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
                <div className="text-center mb-6">
                    <h1 className="text-2xl font-bold">PAGO DE MENSUALIDAD</h1>
                </div>

                <div className="mb-4">
                    <label className="block text-lg mb-2" htmlFor="billing-cycle">Eligue tu ciclo de facturación</label>
                    <div className="flex justify-between gap-4">
                        <button className={BUTTON_CLASS}>Facturación Mensual XS/MES</button>
                        <button className={BUTTON_CLASS}>Facturación Anual XXX$/AÑO</button>
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block text-lg mb-2" htmlFor="card-number">Número de tarjeta</label>
                    <input type="text" id="card-number" className={INPUT_CLASS} placeholder="000-000-000-000" />
                </div>

                <div className="flex gap-4 mb-4">
                    <div className="w-1/2">
                        <label className="block text-lg mb-2" htmlFor="expiry-date">Fecha de caducidad</label>
                        <input type="text" id="expiry-date" className={INPUT_CLASS} placeholder="MM/AA" />
                    </div>
                    <div className="w-1/2">
                        <label className="block text-lg mb-2" htmlFor="security-code">Código de seguridad</label>
                        <input type="text" id="security-code" className={INPUT_CLASS} placeholder="CVC/CVC" />
                    </div>
                </div>

                <button className={`${BUTTON_CLASS} w-full`}>REALIZAR PAGO</button>
            </div>
        </div>
    );
};

export default PaymentForm;