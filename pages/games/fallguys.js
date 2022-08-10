import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Swal from 'sweetalert2';
import Fall from '../../public/fall.jpg';
import { Button } from 'reactstrap';
import Head from 'next/head';
//IMPORT COMPONENTS PAGES
import Sidebar from '../../Components/HomePage/Sidebar';
import Footer from '../../Components/Global/Footer';
import Navhome from '../../components/HomePage/Navhome';
import Table from '../../components/leaderboard/Table';

const Fallguys = () => {
    const router = useRouter()
    useEffect(() => {
        const isAuthenticated = localStorage.getItem('isAuthenticated');

        if (isAuthenticated) {
            router.push('/games/fall-guys');
        } else {
            Swal.fire({
                icon: 'info',
                title: 'Notification',
                text: 'Please Login First',
                confirmButtonColor: '#dc3545',
            })
            router.push('/login')
        }
    }, [router])
    return (
        <>
            <Head>
                <title>FALLGUYS | TEAM ONE</title>
            </Head>
            <Navhome />
            <Sidebar />
            <div className='container-fluid bg-white'>
                <div className='row'>
                    <div className='col-6 px-5 py-5 game-text'>
                        <h1 className='text-game-title'>FALL GUYS</h1>
                        <p>Welcome to Fall Guys: Free for All! You are invited to dive and dodge your way to victory in the pantheon of clumsy. Rookie or pro? Solo or partied up? Fall Guys delivers ever-evolving, high-concentrated hilarity and fun!</p>
                        <div>
                            <Button color="warning" outline size="md">
                                PLAY NOW
                            </Button>
                        </div>
                    </div>
                    <div className='col-6 px-5 py-5 img-game'>
                        <Image className='img-content box-shadow' src={Fall} alt='img' />
                    </div>
                </div>
                <div className="row px-5 py-5 bg-light">
                    <div className='pb-3'>
                        <h2 className='text-center fw-bold'>GAME ACHIEVEMENT</h2>
                    </div>
                    <div className="col-sm-3">
                        <div className="card card-size">
                            <div className="card-body card-custom">
                                <h5 className="card-title">Runner</h5>
                                <p className="card-text">Win 10 times arrow.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="card card-size">
                            <div className="card-body card-custom">
                                <h5 className="card-title">Cold Master</h5>
                                <p className="card-text">Get 3 Legends Outfit.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="card card-size">
                            <div className="card-body card-custom">
                                <h5 className="card-title">Big Bos</h5>
                                <p className="card-text">Win international championship 3 times.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="card card-size">
                            <div className="card-body card-custom">
                                <h5 className="card-title">Funny Guy</h5>
                                <p className="card-text">Get 100 Friendslist.</p>
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

export default Fallguys