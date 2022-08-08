import React, { useState } from 'react';
import axios from 'axios';

import Navbar from '../components/global/Navbar';
import Footer from '../components/global/Footer';
import Swal from 'sweetalert2';

function ForgotPassword() {

    const [email, setEmail] = useState('');

    const changeEmail = (e) => {
        setEmail(e.target.value)
    }

    const submitEmail = () => {
        if (!email) {
            Swal.fire({
                icon: 'warning',
                title: 'ALERT',
                text: 'INPUT YOUR EMAIL FIRST',
                confirmButtonColor: '#dc3545',
            })

        } else {
            const result = axios.put('http://localhost:4000/forgot-password', { email: email })
            Swal.fire({
                icon: 'success',
                title: 'SUCCESS',
                text: 'CHECK YOUR EMAIL',
                confirmButtonColor: '#dc3545',
            })
        }
    }

    return (
        <>
            <Navbar />
            <div className="container size bg-light min-vw-100 mt-3">
                <div className='row text-center pt-5'>
                    <h3 className='title-forgot'>Forgot Password</h3>
                    <p>This page to reset your password via email</p>
                </div>
                <div className='container bg-light align-items-center justify-content-center'>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label text-black">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Input your email' value={email} onChange={changeEmail} />
                        </div>
                        <button onClick={submitEmail} type="submit" className="btn btn-danger send">Send</button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ForgotPassword