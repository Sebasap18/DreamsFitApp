import './App.css'
import Login from "./views/Login.jsx";
import {Link, Route, Routes} from "react-router-dom";
import PaymentSubscription from "./views/PaymentSubscription.jsx";
import GymRoutine from "./views/GymRoutine.jsx";
import TrainingSessionScheduler from "./views/TrainingSessionScheduler.jsx";

function App() {


    return (
        <>
            <Routes>
                <Route path={'/view/login'} element={<Login/>}/>
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
