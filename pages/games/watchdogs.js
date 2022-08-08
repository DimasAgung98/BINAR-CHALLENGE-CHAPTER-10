import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Swal from 'sweetalert2';
import Watch from '../../public/wd.png';
import { Button } from 'reactstrap';
//IMPORT COMPONENTS PAGES
import Sidebar from '../../Components/HomePage/Sidebar';
import Footer from '../../Components/Global/Footer';
import Navhome from '../../components/HomePage/Navhome';
import Table from '../../components/leaderboard/Table';

const Watchdogs = () => {
    // const router = useRouter()
    // useEffect(() => {
    //     const isAuthenticated = localStorage.getItem('isAuthenticated');

    //     if (isAuthenticated) {
    //         router.push('/game/watch-dogs');
    //     } else {
    //         Swal.fire({
    //             icon: 'info',
    //             title: 'Notification',
    //             text: 'Please Login First',
    //             confirmButtonColor: '#dc3545',
    //         })
    //         router.push('/login')
    //     }
    // }, [])
    return (
        <>
            <Navhome />
            <Sidebar />
            <div className='container-fluid bg-white'>
                <div className='row'>
                    <div className='col-6 px-5 py-5 game-text'>
                        <h1 className='text-game-title'>WATCH DOGS</h1>
                        <p>Play as Marcus Holloway, a brilliant young hacker living in the birthplace of the tech revolution, the San Francisco Bay Area. In Watch Dogs, this system is called the Central Operating System (CTOS) and it controls almost every piece of the citys technology and holds key information on all of the city residents.</p>
                        <div>
                            <Button color="warning" outline size="md">
                                PLAY NOW
                            </Button>
                        </div>
                    </div>
                    <div className='col-6 px-5 py-5 img-game'>
                        <Image className='img-content box-shadow' src={Watch} alt='img' />
                    </div>
                </div>
                <div className="row px-5 py-5 bg-light">
                    <div className='pb-3'>
                        <h2 className='text-center fw-bold'>GAME ACHIEVEMENT</h2>
                    </div>
                    <div className="col-sm-3">
                        <div className="card card-size">
                            <div className="card-body card-custom">
                                <h5 className="card-title">Anonymous</h5>
                                <p className="card-text">Hack NASA 5 times.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="card card-size">
                            <div className="card-body card-custom">
                                <h5 className="card-title">Developers</h5>
                                <p className="card-text">Connect the website with all device at smoke city.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="card card-size">
                            <div className="card-body card-custom">
                                <h5 className="card-title">God is Here</h5>
                                <p className="card-text">Dont die during killjoy mission.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="card card-size">
                            <div className="card-body card-custom">
                                <h5 className="card-title">Game Master</h5>
                                <p className="card-text">Complete the story of the game.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row bg-light'>
                    <div className='text-center mt-2 mb-5'>
                        <Link href='#'><Button className='btn-list btn-all-game'>SEE ALL GAME ACHIEVEMENT</Button></Link>
                    </div>
                </div>
                <div className='row pt-4 pb-5'>
                    <div className='col text-center'>
                        <h2 className='fw-bold'>TOP <span id='top-players' className='text-players'>PLAYERS</span></h2>
                    </div>
                    <Table />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Watchdogs