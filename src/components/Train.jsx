import React, { useState } from 'react';
import Navigater from './navigator/nav';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Train({ BASE_URL }) {
  const [tnumber, setTnumber] = useState('');
  const [tname, setTname] = useState('');
  const [fromStation, setFromStation] = useState('');
  const [toStation, setToSation] = useState('');
  const [seat, setSeat] = useState('');
  const [fare, setFare] = useState('');
  const [timing, setTiming] = useState('');
  const [error, setError] = useState('');

  const token = localStorage.getItem('token');
  console.log(token);

  const navigate = useNavigate();
  const handleAdd = async (event) => {
    event.preventDefault();

    const headers = {
      headers: { authorization: `${token}` },
    };

    try {
      const create = {
        tname,
        tnumber,
        fromStation,
        toStation,
        seat,
        fare,
        timing,
      };
      const response = await axios.post(
        `${BASE_URL}/user/create`,
        create,
        headers
      );
      console.log(response.data);
      if (response.data.message == 'data saved successfully') {
        // navigate('/')
        setTiming('');
        setTname('');
        setTnumber('');
        setFromStation('');
        setToSation('');
        setSeat('');
        setFare('');
      }
    } catch (error) {
      console.log('error in create room :', error);
      // setError(error.response.data.error);
    }
  };
  return (
    <>
      <Navigater />
      <div className='container-fluid px-1 py-5 mx-auto'>
        <div className='row d-flex justify-content-center'>
          <div className='col-xl-7 col-lg-8 col-md-9 col-11 text-center'>
            <h3>INDIAN RAILWAYS PASSENGER RESERVATION ENQUIRY</h3>
            <h4>
              <marquee className='red-text' direction='left' height='100px'>
                Please help Indian Railway and government of India in moving
                towards and cashless economy
              </marquee>
            </h4>
            <div className='card'>
              <h5 className='text-center mb-4'>
                Powering world-class companies
              </h5>
              <form className='form-card' onSubmit={handleAdd}>
                <div className='row justify-content-between text-left'>
                  <div className='form-group col-sm-6 flex-column d-flex'>
                    <label className='form-control-label px-3'>
                      Train Number<span className='text-danger'> *</span>
                    </label>
                    <input
                      type='number'
                      value={tnumber}
                      onChange={(e) => setTnumber(e.target.value)}
                      placeholder='Enter Train number'
                      onblur='validate(1)'
                      required
                    />{' '}
                  </div>
                  <div className='form-group col-sm-6 flex-column d-flex'>
                    <label className='form-control-label px-3'>
                      Train Name<span className='text-danger'> *</span>
                    </label>
                    <input
                      type='text'
                      value={tname}
                      onChange={(e) => setTname(e.target.value)}
                      placeholder='Enter train name'
                      onblur='validate(2)'
                      required
                    />{' '}
                  </div>
                </div>
                <div className='row justify-content-between text-left'>
                  <div className='form-group col-sm-6 flex-column d-flex'>
                    <label className='form-control-label px-3'>
                      From Station<span className='text-danger'> *</span>
                    </label>
                    <input
                      type='text'
                      value={fromStation}
                      onChange={(e) => setFromStation(e.target.value)}
                      placeholder=''
                      onblur='validate(3)'
                      required
                    />{' '}
                  </div>
                  <div className='form-group col-sm-6 flex-column d-flex'>
                    <label className='form-control-label px-3'>
                      To Station<span className='text-danger'> *</span>
                    </label>
                    <input
                      type='text'
                      value={toStation}
                      onChange={(e) => setToSation(e.target.value)}
                      placeholder=''
                      onblur='validate(4)'
                      required
                    />{' '}
                  </div>
                </div>
                <div className='row justify-content-between text-left'>
                  <div className='form-group col-sm-6 flex-column d-flex'>
                    <label className='form-control-label px-3'>
                      Available<span className='text-danger'> *</span>
                    </label>
                    <input
                      type='number'
                      value={seat}
                      onChange={(e) => setSeat(e.target.value)}
                      placeholder=''
                      onblur='validate(5)'
                      required
                    />{' '}
                  </div>
                  <div className='form-group col-sm-6 flex-column d-flex'>
                    <label className='form-control-label px-3'>
                      Fare<span className='text-danger'> *</span>
                    </label>
                    <input
                      type='number'
                      value={fare}
                      onChange={(e) => setFare(e.target.value)}
                      placeholder=''
                      onblur='validate(5)'
                      required
                    />{' '}
                  </div>
                </div>
                <div className='row justify-content-between text-left'>
                  <div className='form-group col-sm-6 flex-column d-flex'>
                    <label className='form-control-label px-3'>
                      Timing<span className='text-danger'> *</span>
                    </label>
                    <input
                      type='number'
                      value={timing}
                      onChange={(e) => setTiming(e.target.value)}
                      placeholder=''
                      onblur='validate(5)'
                      required
                    />{' '}
                  </div>
                </div>
                {/* <div class="row justify-content-between text-left">
                                    <div class="form-group col-12 flex-column d-flex"> <label class="form-control-label px-3">What would you be using Flinks for?<span class="text-danger"> *</span></label> <input type="text" id="ans" name="ans" placeholder="" onblur="validate(6)"/> </div>
                                </div> */}
                <div className='row justify-content-end'>
                  <div className='form-group col-sm-6'>
                    {' '}
                    <button type='submit' className='btn-block btn-primary'>
                      Add Train
                    </button>{' '}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Train;
