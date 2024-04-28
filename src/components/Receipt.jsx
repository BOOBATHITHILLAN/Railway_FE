import React, { useState, useEffect } from 'react';
import Navigater from './navigator/nav';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Receipt({ BASE_URL }) {
    const [date, setDate] = useState('');
    const [seat, setSeat] = useState('');
    const [tnumber, setTnumber] = useState('');
    const [tname, setTname] = useState('');
    const [fromStation, setFromStation] = useState('');
    const [toStation, setToSation] = useState('');
    const [timing, setTiming] = useState('');
    const [fare, setFare] = useState(0);
    const [error, setError] = useState('');


    const token = localStorage.getItem('token');
    const bookId = localStorage.getItem('bookId');
    console.log(token);
    const headers = {
        headers: { "authorization": `${token}` }
    }


    const navigate = useNavigate();
    useEffect(() => {
        getTrain();
    }, [])
    const getTrain = async () => {
        const response = await axios.post(`${BASE_URL}/user/receipt`, { bookId }, headers);
        console.log(response.data);
        setTname(response.data.tname);
        setTnumber(response.data.tnumber);
        setFromStation(response.data.fromStation);
        setToSation(response.data.toStation);
        setFare(response.data.price);
        setTiming(response.data.timing);
        setDate(response.data.date);
        setSeat(response.data.seat);

        console.log("hlo");
    }
    const handledone = async (e) => {
        e.preventDefault();
        navigate('/booked')

    }
    return (
        <>
            <Navigater />
            <div className="container-fluid px-1 py-5 mx-auto">
                <div className="row d-flex justify-content-center">
                    <div className="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
                        <h3>INDIAN RAILWAYS PASSENGER RESERVATION ENQUIRY</h3>
                        <h4>
                            <marquee className="red-text" direction="left" height="100px">
                                Please help Indian Railway and government of India in moving towards and cashless economy

                        </marquee></h4>
                        <div className="card">
                            <table className='table bordered table-primary'>
                                <tbody>
                                    <tr>
                                        <th>Train number</th>
                                        <td>{tnumber}</td>
                                    </tr>
                                    <tr>
                                        <th>Train Name</th>
                                        <td>{tname}</td>
                                    </tr>
                                    <tr>
                                        <th>From station</th>
                                        <td>{fromStation}</td>
                                    </tr>
                                    <tr>
                                        <th>To Station</th>
                                        <td>{toStation}</td>
                                    </tr>
                                    <tr>
                                        <th>Date</th>
                                        <td >{date}</td>
                                    </tr>
                                    <tr>
                                        <th>No of seats</th>
                                        <td>{seat}</td>
                                    </tr>
                                    <tr>
                                        <th>Amount paid</th>
                                        <td >{fare}</td>
                                    </tr>
                                    <tr>
                                        <th>No of seats</th>
                                        <td>{timing}</td>
                                    </tr>

                                </tbody>
                                <button className='btn btn-success ml-5 done text-center' onClick={handledone}>Done</button>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Receipt;