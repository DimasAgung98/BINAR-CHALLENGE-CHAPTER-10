//IMPORT AXIOS
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Link from 'next/link';
import Swal from 'sweetalert2';

// import jsonwebtoken to convert  jwt into json
const jwt = require('jsonwebtoken');

// import dispatch and action (Redux)
import { useDispatch } from 'react-redux'
import { addAuth, removeAuth } from '../../features/authentication/authenticationSlice'

function FormLogin() {
    //USESTATE FOR USERNAME AND PASSWORD
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const dispatch = useDispatch();

    const router = useRouter()

    //HANDLE ON SUBMIT TO BACKEND
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const result = await axios.post('https://teamone-server.herokuapp.com/api/login', {
                username: username,
                password: password
            });

            if (result.data.message === "wrong username") {
                Swal.fire({
                    icon: 'error',
                    title: 'FAILED',
                    text: 'Wrong Username',
                    confirmButtonColor: '#dc3545',
                })
            } else {
                if (result.data.message === "wrong password") {
                    Swal.fire({
                        icon: 'error',
                        title: 'FAILED',
                        text: 'Wrong Password',
                        confirmButtonColor: '#dc3545',
                    })
                }
                else {
                    Swal.fire({
                        icon: 'success',
                        title: 'WELCOME',
                        text: 'Login Success!',
                        confirmButtonColor: '#dc3545',
                    })

                    const decodedToken = jwt.decode(result.data.token);
                    console.log(decodedToken.id);

                    dispatch(addAuth({ id : decodedToken.id }));

                    localStorage.setItem('isAuthenticated', true);
                    router.push('/home');
                }
            }

        }
        catch (err) {
            alert(err.toString());
        }
    }


    return (
        <>
            <div className='form-content-right radius'>
                <form action='/login' method='post' className='form' onSubmit={handleSubmit}>
                    <h1>Login your account by filling out the information below.</h1>
                    <div className='form-inputs'>
                        <label htmlFor='username' className='form-label'>
                            Username
                        </label>
                        <input id='username' type="text" name="username" className='form-input' placeholder='Enter your username' value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className='form-inputs'>
                        <label htmlFor='password' className='form-label'>
                            Password
                        </label>
                        <input id='password' type="password" name="password" className='form-input' placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} />
                        <div className='forgot'><Link href='/forgot-password'><a className='forgot-title'>Forgot the password</a></Link></div>
                    </div>
                    <button className='form-input-btn' type='submit'>Login</button>
                    <div className='form-input-login'>Dont have an account? Register <Link href='/register'>here</Link></div>
                </form>
            </div>
        </>
    )
}

export default FormLogin;