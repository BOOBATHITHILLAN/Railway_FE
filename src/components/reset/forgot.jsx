import React, { useState } from 'react';
import axios from 'axios';

function ForgotPassword({ BASE_URL }) {
    const [email, setEmail] = useState('');
    const [error, seterror] = useState('')

    const handleForgotPassword = async (event) => {
        event.preventDefault();
        try {
            const user = {
                email
            }
            const response = await axios.post(`${BASE_URL}/user/forgot`, user)
            seterror(response.data.error)
            console.log(response.data)
        } catch (error) {
            console.log("Error in signin user :", error);
            seterror(error.response.data.error);
        }
    };

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
                                <form onSubmit={handleForgotPassword}>

                                    <div className="form-outline mb-4">
                                        <input type="email" className="form-control" value={email}
                                            onChange={(e) => setEmail(e.target.value)} />
                                        <label className="form-label" >Email</label>
                                    </div>



                                    <div className="form-outline mb-4">
                                        <label className="form-label" >{error}</label>
                                    </div>
                                    <div className="d-flex justify-content-center text-dark links">
                                        once your password update through your mail ,back to <a href="/">Sign In</a>

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

export default ForgotPassword;