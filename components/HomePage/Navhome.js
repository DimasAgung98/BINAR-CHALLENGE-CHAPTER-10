import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Swal from 'sweetalert2';
//IMPORT LOGO IMAGES
import NavbarLogo from '../../public/logoteamone.png';
//IMPORT ICONS
import { FaUserAlt, FaSignOutAlt } from 'react-icons/fa'


function Navhome() {
    const router = useRouter()
    const handleLogout = async (e) => {
        e.preventDefault();
        localStorage.clear('isAuthenticated');
        Swal.fire({
            icon: 'success',
            title: 'LOG OUT',
            text: 'LOG OUT SUCCESSFULLY',
            confirmButtonColor: '#dc3545',
        })
        router.push('/')
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
                                <div className='navbar_text'>
                                    <h4>TEAM<span> ONE</span></h4>
                                </div>
                            </a></Link>
                        </div>
                        <div className='col-6'>
                        </div>
                        {/* button logout */}
                        <div className='col-3'>
                            <div className='collapse navbar-collapse list-text justify-content-end' id='navbarSupportedContent'>
                                <ul className="navbar-nav">
                                    <li className="nav-item mx-3">
                                        <div className="nav-link" onClick={openProfile}><a><FaUserAlt className='icon-profile' />PROFILE</a></div>
                                    </li>
                                    <li className="nav-item mx-3">
                                        <div className="nav-link" onClick={handleLogout}><a><FaSignOutAlt className='icon-logout' />LOGOUT</a></div>
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