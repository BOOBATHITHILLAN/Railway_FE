import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignUp({ BASE_URL }) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, seterror] = useState('')

    const navigate = useNavigate()
    const handleSignUp = async (event) => {
        event.preventDefault();
        try {
            const user = {
                username,
                email,
                password
            }
            const response = await axios.post(`${BASE_URL}/user/signup`, user)
            console.log(response.data);
            var msg = response.data.message
            // seterror(response.data.error);

        } catch (error) {
            console.log("Error in adding user :", error)
            seterror(error.response.data.error);
        }
        if (msg === 'User added successfully') {
            navigate('/')
        }
    }
    return (
        <section className="background-radial-gradient overflow-hidden">
            <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
                <div className="row gx-lg-5 align-items-center mb-5">
                    <div className="col-lg-6 mb-5 mb-lg-0 loginbg" >
                        <h1 className="my-5 display-5 fw-bold ls-tight login1" >
                            The best offer <br />
                            <span className='login1'>for your business</span>
                        </h1>
                        <p className="mb-4 opacity-70 login1">

                        </p>
                    </div>

                    <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
                    
                        <div className="card login-cards bg-glass">
                            <div className="card-body px-4 py-5 px-md-5">
                                <form onSubmit={handleSignUp}>

                                    <div className="form-outline mb-4">
                                        <input type="text" className="form-control" value={username}
                                            onChange={(e) => setUsername(e.target.value)} />
                                        <label className="form-label" >User Name</label>
                                    </div>


                                    <div className="form-outline mb-4">
                                        <input type="email" className="form-control" value={email}
                                            onChange={(e) => setEmail(e.target.value)} />
                                        <label className="form-label" >Email address</label>
                                    </div>


                                    <div className="form-outline mb-4">
                                        <input type="password" className="form-control"
                                            value={password} onChange={(e) => setPassword(e.target.value)} />
                                        <label className="form-label" >Password</label>
                                    </div>


                                    <button type="submit"  className="btn btn-primary btn-block mb-4">
                                        Sign In
                                    </button>
                                    <div className="form-outline mb-4">
                                        <label className="form-label" >{error}</label>
                                    </div>
                                    <div className="d-flex justify-content-center text-dark links">
                                        Already have an account?<a href="/">Sign In</a>

                                    </div>
                                    <div className="form-check d-flex justify-content-center mb-4">
                                        <p className='m-2'>username:user1</p>
                                        <p className='m-2'>password:user123</p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default SignUp;