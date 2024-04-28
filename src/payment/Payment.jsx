import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './payment.css'
import Navigater from '../components/navigator/nav';

function Payment({ BASE_URL }) {

    const [payment, setpayment] = useState('payed');
    const [error, setError] = useState('')

    const token = localStorage.getItem('token');
    console.log(token);
    const bookId = localStorage.getItem('bookId');
    console.log(bookId);
    const Trainid = localStorage.getItem('Trainid');
    const seat = localStorage.getItem('seat');

    const navigate = useNavigate();
    const handlepay = async (event) => {
        event.preventDefault();
        setpayment("payment success")
        const headers = {
            headers: { "authorization": `${token}` }
        }

        try {
            const create = {
                payment,
                bookId,
                Trainid,
                seat
            }
            const response = await axios.post(`${BASE_URL}/user/payment`, create, headers);
            console.log(response.data);
            navigate('/booked')


        } catch (error) {
            console.log("error in create room :", error);
            // setError(error.response.data.error);

        }
    }
    return (
        <>
            <div className="container m-4 payment-body payment-container p-0">
                <div className="card payment-card px-4">
                    <form onSubmit={handlepay}>
                        <p className="h8 py-3">Payment Details</p>
                        <div className="row gx-3">
                            <div className="col-12">
                                <div className="d-flex flex-column">
                                    <p className="text mb-1">Person Name</p>
                                    <input className="form-control mb-3" type="text" placeholder="Name" required />
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="d-flex flex-column">
                                    <p className="text mb-1">Card Number</p>
                                    <input className="form-control mb-3" type="text" placeholder="1234 5678 435678" required />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="d-flex flex-column">
                                    <p className="text mb-1">Expiry</p>
                                    <input className="form-control mb-3" type="text" placeholder="MM/YYYY" required />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="d-flex flex-column">
                                    <p className="text mb-1">CVV/CVC</p>
                                    <input className="form-control mb-3 pt-2 " type="password" placeholder="***" required />
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="btn btn-primary mb-3">
                                    <button className="ps-3 btn btn-primary" type='submit'>Pay </button>
                                    <span className="fas fa-arrow-right"></span>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>

    )
}

export default Payment