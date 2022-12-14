import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Swal from 'sweetalert2';
//IMPORT LOGO IMAGES
import NavbarLogo from '../../public/logoteamone.png';
//IMPORT ICONS
import { FaUserAlt, FaSignOutAlt } from 'react-icons/fa'
import { RiCoinFill } from 'react-icons/ri';
import { from } from 'form-data';

// import dispatch and action (Redux)
import { useDispatch, useSelector } from 'react-redux'
import { removeAuth } from '../../features/authentication/authenticationSlice'
import { removeGameHistory } from '../../features/gameHistory/gameHistorySlice' 


function Navhome() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    // INISIASI STATE UNTUK DATA PROFILE
    const [username, setUsername] = useState('');
    const [point, setPoint] = useState(null);
    // Put useDispatch and into variable
    const dispatch = useDispatch();

    // Put authentication store's data into variable
    const authId = useSelector(state => state.authentication.id)

    useEffect(() => {
    
        fetch(`https://teamone-server.herokuapp.com/api/users/${authId}`)
            .then(res => res.json())
            .then(
                (res) => {
                    setIsLoaded(true);

                    setUsername(res.data.username);
                    setPoint(res.data.point);

                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [authId])

    const router = useRouter()
    const handleLogout = async (e) => {
        e.preventDefault();

        Swal.fire({
            icon: 'success',
            title: 'LOG OUT',
            text: 'LOG OUT SUCCESSFULLY',
            confirmButtonColor: '#dc3545',
        })
        router.push('/')
        localStorage.clear('isAuthenticated');
        dispatch(removeAuth());
        dispatch(removeGameHistory());
    }

    const openProfile = async (e) => {
        router.push('/home/profile')
    }

    return (
        <>
            <section>
                <nav className='navbar navbar-expand-lg navbar-dark fixed-top'>
                    <div className='container-fluid'>
                        <div className='col-3'>
                            {/* logo navbar */}
                            <Link href='/home' className='navbar-brand'><a className='decoration'>
                                <div className='logo mb-2'>
                                    <Image src={NavbarLogo} alt="logo" />
                                </div>
                                <div className='navbar_text mb-4'>
                                    <h4>TEAM<span> ONE</span></h4>
                                </div>
                            </a></Link>
                        </div>
                        <div className='col-4'>
                        </div>
                        {/* button logout */}
                        <div className='col-5'>
                            <div className='collapse navbar-collapse list-text justify-content-end' id='navbarSupportedContent'>
                                <ul className="navbar-nav">
                                    <li className="nav-item pointer mx-3">
                                        <div className="nav-link" onClick={openProfile}><a className='text-uppercase'><FaUserAlt className='icon-profile mx-1' />{username}</a></div>
                                    </li>
                                    <li className="nav-item pointer mx-3">
                                        <div className="nav-link"><a><RiCoinFill className='icon-profile mx-1' />POINTS : {point}</a></div>
                                    </li>
                                    <li className="nav-item pointer mx-3">
                                        <div className="nav-link" onClick={handleLogout}><a><FaSignOutAlt className='icon-logout mx-1' />LOGOUT</a></div>
                                    </li>
                                </ul>
                            </div>
                            {/* hamburger button */}
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>
                    </div>
                </nav>
            </section>
        </>
    )
}

export default Navhome