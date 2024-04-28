import React, { useEffect, useState } from 'react';
import Navigater from './navigator/nav';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function BookTrain({ BASE_URL }) {
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

    const Trainid = localStorage.getItem('Trainid');
    console.log(token);
    console.log(Trainid)


    const headers = {
        headers: { "authorization": `${token}` }
    }


    const navigate = useNavigate();
    useEffect(() => {
        getTrain();
    }, [])
    const getTrain = async () => {
        const response = await axios.post(`${BASE_URL}/user/trainlist`, { Trainid }, headers);
        console.log(response.data);
        setTname(response.data.tname);
        setTnumber(response.data.tnumber);
        setFromStation(response.data.fromStation);
        setToSation(response.data.toStation);
        setFare((response.data.fare));
        setTiming(response.data.timing);
        
        console.log("hlo");
    }
    // var timing = response.data.timing;
    localStorage.setItem('seat', seat)
    const handleBook = async (event) => {
        event.preventDefault();
        var price = fare * seat
    
        try {
            const create = {
                tname,
                tnumber,
                fromStation,
                toStation,
                seat,
                price,
                timing,
                date
            }
            const response = await axios.post(`${BASE_URL}/user/booking`, create, headers);
            console.log(response.data);
            var bookId = response.data.bookId;
            localStorage.setItem('bookId', bookId)
            if (response.data.message == 'data saved successfully') {
                navigate('/payment')
            }

        } catch (error) {
            console.log("error in booking :", error);
            // setError(error.response.data.error);

        }
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
                                    <td ><input type='date' value={date} onChange={(e) => setDate(e.target.value)} /></td>
                                </tr>
                                <tr>
                                    <th>No of seats</th>
                                    <td><input type='number' value={seat} onChange={(e) => setSeat(e.target.value)} /></td>
                                </tr>
                                <tr>
                                    <th></th>
                                    <button onClick={handleBook}>book and pay</button>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BookTrain;