import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function ResetPassword({ user, BASE_URL }) {
    const [password, setPassword] = useState('');
    const [cpassword, setCpassword] = useState('');
    const [error, seterror] = useState('');
    const [profile, setprofile] = useState({});

    const id = useParams().id;
    console.log(id)
    console.log(user)
    const navigate = useNavigate();
    useEffect(() => {
        const finduser = user.find(data => data.id == id);
        setprofile(finduser)
        console.log(profile);
    }, [])

    const handleSignIn = async (event) => {
        event.preventDefault();
        if (password === cpassword) {
            try {
                const users = {
                    password,
                    id
                }
                const response = await axios.post(`${BASE_URL}/user/reset`, users)
                console.log(response.data)
                if (response.data.message == "password updated successfully") {
                    navigate('/')
                }
            } catch (error) {
                console.log("Error in signin user :", error)
                seterror(error.response.data.error)
            }
        } else {
            seterror("password doesnot match")
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
                                <form onSubmit={handleSignIn}>

                                    <div className="form-outline mb-4">
                                        <input type="email" className="form-control" value={password}
                                            onChange={(e) => setPassword(e.target.value)} />
                                        <label className="form-label" >Password</label>
                                    </div>


                                    <div className="form-outline mb-4">
                                        <input type="email" className="form-control" value={cpassword}
                                            onChange={(e) => setCpassword(e.target.value)} />
                                        <label className="form-label" >Confirm Password</label>
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-block mb-4">
                                        Sign In
                                    </button>
                                    <div className="form-outline mb-4">
                                        <label className="form-label" >{error}</label>
                                    </div>
                                    <div className="d-flex justify-content-center links text-dark">
                                        If the link is invalid .pls,rend the mail:<a href="/forgotpassword">resend mail</a>

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

export default ResetPassword;