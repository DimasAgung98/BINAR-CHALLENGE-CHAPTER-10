import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Aos from 'aos';
import { useRouter } from 'next/router';
import Swal from 'sweetalert2';
import GTA5 from '../../public/gta.jpg';
import { Button } from 'reactstrap';
import Head from 'next/head';
//IMPORT COMPONENTS PAGES
import Sidebar from '../../components/HomePage/Sidebar';
import Footer from '../../components/global/Footer';
import Navhome from '../../components/HomePage/Navhome';
import Table from '../../components/leaderboard/Table';

// import dispatch and action (Redux)
import { useDispatch, useSelector } from 'react-redux'
import { addGameHistory } from '../../features/gameHistory/gameHistorySlice' 


const Gta = () => {
    // Put useDispatch and into variable
    const dispatch = useDispatch();
    // Put gameHistory store's data into variable
    const gameHistory = useSelector(state => state.gameHistory.gameId)


    const router = useRouter()
    useEffect(() => {
        const isAuthenticated = localStorage.getItem('isAuthenticated');
        Aos.init({ duration: 2000 });

        if (isAuthenticated) {
            // router.push('/games/gta');
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

    // DETECTOR ID GAME
    let playedGameDetector = ''

    if(gameHistory.includes(2)){
        playedGameDetector = <div>You've Played This Game</div> 
    }

    // ONCLICK 'PLAY NOW'
    const addGameIdToHistory = () => {
        console.log('fungsi addGameIdToHistory dijalankan')

        // put 1 (RPS Game Id) to gameHistory Store if id not detected
        if(!gameHistory.includes(2)) {
            dispatch(addGameHistory(2))
            console.log('id belum ada, dan sudah ditambahkan ke store')
        }
        
        // direct to game
        // theres no game yet
    }


    return (
        <>
            <Head>
                <title>GTA V | TEAM ONE</title>
            </Head>
            <Navhome />
            <Sidebar />
            <div className='container-fluid bg-white'>
                <div className='row'>
                    <div data-aos='fade-right' className='col-6 px-5 py-5 game-text'>
                        { playedGameDetector }
                        <h1 className='text-game-title'>GRAND THEFT AUTO V</h1>
                        <p>Grand Theft Auto V evolves nearly every mechanic that was in the previous Grand Theft Auto games. As far as driving goes, the vehicles have been greatly improved, with Rockstar running more complex physics on them, such as making some cars hold to the ground slightly better.</p>
                        <div>
                            <Button onClick={addGameIdToHistory} color="warning" outline size="md">
                                 PLAY NOW
                            </Button>
                        </div>
                    </div>
                    <div data-aos='fade-left' className='col-6 px-5 py-5 img-game'>
                        <Image className='img-content box-shadow' src={GTA5} alt='img' />
                    </div>
                </div>
                <div className="row px-5 py-5 bg-light">
                    <div className='pb-3'>
                        <h2 className='text-center fw-bold'>GAME ACHIEVEMENT</h2>
                    </div>
                    <div data-aos='fade-right' className="col-sm-3">
                        <div className="card card-size">
                            <div className="card-body card-custom">
                                <h5 className="card-title">Best Car Customization</h5>
                                <p className="card-text">Collect car rating point.</p>
                            </div>
                        </div>
                    </div>
                    <div data-aos='fade-right' className="col-sm-3">
                        <div className="card card-size">
                            <div className="card-body card-custom">
                                <h5 className="card-title">Stick Up Kid</h5>
                                <p className="card-text">GTA Online: Hold up all 20 Stores.</p>
                            </div>
                        </div>
                    </div>
                    <div data-aos='fade-left' className="col-sm-3">
                        <div className="card card-size">
                            <div className="card-body card-custom">
                                <h5 className="card-title">Mastermind</h5>
                                <p className="card-text">GTA Online: Earn 25 platinum medals across Heist Setups and Finales.</p>
                            </div>
                        </div>
                    </div>
                    <div data-aos='fade-left' className="col-sm-3 card-size">
                        <div className="card card-size">
                            <div className="card-body card-custom">
                                <h5 className="card-title">Red Mist</h5>
                                <p className="card-text">Complete all Rapmages.</p>
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

export default Gta