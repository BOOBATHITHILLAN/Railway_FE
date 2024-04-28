import React, { useEffect, useState } from 'react';
import Navigater from './navigator/nav';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

function TrainDetails({ BASE_URL }) {
    const [details, setDetails] = useState([]);
    const token = localStorage.getItem('token');
    console.log(token);

    useEffect(() => {
        getDetails()
    }, [])
    const headers = {
        headers: { "authorization": `${token}` }
    }

    const getDetails = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/user/list`, headers);
            console.log(response.data);
            setDetails(response.data)
        } catch (error) {
            console.log("error in create room :", error);

        }
    }
    function setID(Trainid) {
        localStorage.setItem('Trainid', Trainid);
    }
    return (
        <>
            <Navigater />
            <div className="container-fluid px-1 py-5 mx-auto">
                <div className="row d-flex justify-content-center">
                    <div className="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
                        <h3>INDIAN RAILWAYS PASSENGER RESERVATION ENQUIRY</h3>
                        <h4><marquee className=" pt-4" width="80%" direction="left" height="100px">
                            
                                Please help Indian Railway and government of India in moving towards and cashless economy

                        </marquee></h4>
                        <div class="card">
                            <table className='table bordered table-primary'>
                                <tr>
                                    <th>Train number</th>
                                    <th>Train name</th>
                                    <th>from station</th>
                                    <th>To staion</th>
                                    <th>Fare</th>
                                    <th>Availaibe</th>
                                    <th>Timing</th>
                                    <th>status</th>
                                </tr>
                                {
                                    details.map(data => (
                                        <tr key={data._id}>
                                            <td>{data.tnumber}</td>
                                            <td>{data.tname}</td>
                                            <td>{data.fromStation}</td>
                                            <td>{data.toStation}</td>
                                            <td>{data.fare}</td>
                                            <td>{data.seat}</td>
                                            <td>{data.timing}</td>
                                            <td><Link to={`/booktrain`}>
                                                <button className="btn btn-info"
                                                    onClick={(e) =>
                                                        setID(data._id)}
                                                    variant="info">
                                                    Book </button></Link>
                                                </td>
                                        </tr>
                                    ))
                                }
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TrainDetails