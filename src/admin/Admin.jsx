import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './admin.css';
import { useNavigate } from 'react-router-dom';
import Navigater from '../components/navigator/nav';

function Admin({ BASE_URL }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, seterror] = useState('');
    const navigate = useNavigate();

    const handleSignIn = async (event) => {

        event.preventDefault();
        if(email == "admin@gmail.com"&&password =="admin123" ){
            navigate("/train");
        }else{
            seterror(" Admin authentication error")
        }
        
    };

    return (
        <>
            <Navigater />

            <div className='login-body'>
                <div className="container login-container">
                    <div className="d-flex justify-content-center h-100">
                        <div className="card login-card">
                            <div className="card-header login-card-header">
                                <h3>Admin login</h3>

                            </div>
                            <div className="card-body">
                                <form >
                                    <div className="input-group form-group">
                                        <div className="input-group-prepend login-input-group">
                                            <span className="input-group-text"><i className="fas fa-user"></i></span>
                                        </div>
                                        <input type="email" className="form-control login-input"
                                            value={email} onChange={(e) => setEmail(e.target.value)}
                                            placeholder="usermail id" required />

                                    </div>
                                    <div className="input-group form-group">
                                        <div className="input-group-prepend login-input-group">
                                            <span className="input-group-text"><i className="fas fa-key"></i></span>
                                        </div>
                                        <input type="password" className="form-control"
                                            value={password} onChange={(e) => setPassword(e.target.value)}
                                            placeholder="password" required />
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" onClick={handleSignIn} className="btn float-right login_btn" >login</button>
                                        <p className='text-center error' >{error}</p>
                                    </div>
                                </form>
                            </div>
                            <div className="card-footer">
                                <div className="d-flex justify-content-center links">
                                    <p>Usermail : admin@gmail.com</p>

                                </div>
                                <div className="d-flex justify-content-center links">
                                    <p>Password : admin123</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Admin;