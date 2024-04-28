import React, { useState, useEffect } from 'react'
import axios from 'axios';

import { useNavigate } from 'react-router-dom';
import Navigater from './navigator/nav';

function BookingDetails({ BASE_URL }) {
    const [chartData, setChartData] = useState([]);
    const token = localStorage.getItem('token');
    const headers = {
        headers: { "authorization": `${token}` }
    }
    useEffect(() => {
        getDetails();
    }, []);
    const getDetails = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/user/data`, headers);
            console.log(response.data);
            setChartData(response.data)
        } catch (error) {
            console.log("error in create room :", error);

        }
    }
    console.log(chartData)
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
                            </marquee>
                        </h4>
                        <div className="card">
                            <table className='table bordered table-primary'>
                                <thead>
                                    <th>Date</th>
                                    <th>Train number</th>
                                    <th>Train name</th>
                                    <th>From station</th>
                                    <th>To station</th>
                                    <th>Timing</th>
                                    <th>Seat</th>
                                    <th>Fare</th>
                                    <th>Payment</th>
                                </thead>
                                <tbody>
                                    {
                                        chartData.map((data) => (
                                            <tr key={data._id}>
                                                <td>{data.date}</td>
                                                <td>{data.tnumber}</td>
                                                <td>{data.tname}</td>
                                                <td>{data.fromStation}</td>
                                                <td>{data.toStation}</td>
                                                <td>{data.timing}</td>
                                                <td>{data.seat}</td>
                                                <td>{data.price}</td>

                                                {
                                                    (data.paymentStatus == "payment successfully done") ?
                                                        (
                                                            <td>Paid</td>
                                                        ) :
                                                        <td><a href='/payment'> not paid</a></td>}

                                           </tr>
                                        ))
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BookingDetails