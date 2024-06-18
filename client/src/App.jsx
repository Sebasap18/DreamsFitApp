import './App.css'
import Login from "./views/auth/Login.jsx";
import {Link, Navigate, Route, Routes} from "react-router-dom";
import PaymentSubscription from "./views/payment/PaymentSubscription.jsx";
import GymRoutine from "./views/training/GymRoutine.jsx";
import TrainingSessionScheduler from "./views/training/TrainingSessionScheduler.jsx";

function App() {


    return (
        <>
            <Routes>
                <Route path="/" element={<Navigate to="/view/login"/>}/>
                <Route path="/view/login" element={<Login />} />
                <Route path={'/view/payment-subscription'} element={<PaymentSubscription/>}/>
                <Route path={'/view/assigment-routine'} element={<GymRoutine/>}/>
                <Route path={'/view/scheduler-training-session'} element={<TrainingSessionScheduler/>}/>
                <Route/>
                <Route/>
            </Routes>


        </>
    )
}

export default App
