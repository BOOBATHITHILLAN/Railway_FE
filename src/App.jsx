import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';
import axios from 'axios';
import './app.css';
import SignIn from './components/login/signIn';
import SignUp from './components/login/signUp';
import ForgotPassword from './components/reset/forgot';
import ResetPassword from './components/reset/reset';
import Navigater from './components/navigator/nav';
import Train from './components/Train';
import BookTrain from './components/BookTrain';
import Payment from './payment/Payment';
import TrainDetails from './components/TrainDetails';
import Receipt from './components/Receipt';
import BookingDetails from './components/BookingDetails';
import Admin from './admin/Admin';

function App() {
  const [user, setuser] = useState([]);
  const BASE_URL = 'https://railway-be.onrender.com';
  const token = localStorage.getItem('token');
  const headers = {
    headers: { authorization: `${token}` },
  };

  return (
    <Router>
      <Routes>
        <Route path='/' element={<SignIn BASE_URL={BASE_URL} />} />
        <Route path='/signup' element={<SignUp BASE_URL={BASE_URL} />} />
        <Route
          path='/forgotpassword'
          element={<ForgotPassword BASE_URL={BASE_URL} />}
        />
        <Route
          path='/resetpassword/:id'
          element={<ResetPassword user={user} BASE_URL={BASE_URL} />}
        />
      </Routes>
      <Routes>
        <Route path='/receipt' element={<Receipt BASE_URL={BASE_URL} />} />
        <Route path='/admin' element={<Admin BASE_URL={BASE_URL} />} />
        <Route
          path='/booked'
          element={<BookingDetails BASE_URL={BASE_URL} />}
        />
        <Route path='/details' element={<TrainDetails BASE_URL={BASE_URL} />} />
        <Route path='/train' element={<Train BASE_URL={BASE_URL} />} />
        <Route path='/bookTrain' element={<BookTrain BASE_URL={BASE_URL} />} />
        <Route path='/payment' element={<Payment BASE_URL={BASE_URL} />} />
        {/* <Route path='/list' element={<Details BASE_URL={BASE_URL} />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
