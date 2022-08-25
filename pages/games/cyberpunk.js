import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Aos from 'aos';
import { useRouter } from 'next/router';
import Swal from 'sweetalert2';
import Cyber from '../../public/cyber.jpg';
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

const Cyberpunk = () => {
    
    // Put useDispatch and into variable
    const dispatch = useDispatch();
    // Put gameHistory store's data into variable
    const gameHistory = useSelector(state => state.gameHistory.gameId)


    const router = useRouter()
    useEffect(() => {
        const isAuthenticated = localStorage.getItem('isAuthenticated');
        Aos.init({ duration: 2000 });

        if (isAuthenticated) {
            // router.push('/games/cyberpunk');
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

    if(gameHistory.includes(7)){
        playedGameDetector = <div className='played-game'>You&apos;ve Played This Game</div> 
    }

    // ONCLICK 'PLAY NOW'
    const addGameIdToHistory = () => {
        console.log('fungsi addGameIdToHistory dijalankan')

        // add Game ID to gameHistory Store if id not detected
        if(!gameHistory.includes(7)) {
            dispatch(addGameHistory(7))
            console.log('id belum ada, dan sudah ditambahkan ke store')
        }
        
        // direct to game
            // theres no game yet
    }

    return (
        <>
            <Head>
                <title>CYBERPUNK | TEAM ONE</title>
            </Head>
            <Navhome />
            <Sidebar />
            <div className='container-fluid bg-white'>
                <div className='row'>
                    <div data-aos='fade-right' className='col-6 px-5 py-5 game-text'>
                        { playedGameDetector }
                        <h1 className='text-game-title'>CYBERPUNK</h1>
                        <p>Cyberpunk 2077 is an open-world, action-adventure RPG set in the megalopolis of Night City, where you play as a cyberpunk mercenary wrapped up in a do-or-die fight for survival. Improved and featuring all-new free additional content, customize your character and playstyle as you take on jobs, build a reputation, and unlock upgrades.</p>
                        <div>
                            <Button onClick={addGameIdToHistory} color="warning" outline size="md">
                                 PLAY NOW
                            </Button>
                        </div>
                    </div>
                    <div data-aos='fade-left' className='col-6 px-5 py-5 img-game'>
                        <Image className='img-content box-shadow' src={Cyber} alt='img' />
                    </div>
                </div>
                <div className="row px-5 py-5 bg-light">
                    <div className='pb-3'>
                        <h2 className='text-center fw-bold'>GAME ACHIEVEMENT</h2>
                    </div>
                    <div className="col-sm-3">
                        <div data-aos='fade-right' className="card card-size">
                            <div className="card-body card-custom">
                                <h5 className="card-title">Right Back At Ya</h5>
                                <p className="card-text">Kill or incapacitate an enemy who threw a grenade at you.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div data-aos='fade-right' className="card card-size">
                            <div className="card-body card-custom">
                                <h5 className="card-title">True Soldier</h5>
                                <p className="card-text">Kill or incapacitate 300 enemies using ranged weapons.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div data-aos='fade-left' className="card card-size">
                            <div className="card-body card-custom">
                                <h5 className="card-title">Stanislavskis Method</h5>
                                <p className="card-text">Use a dialogue option related to Vs life path 10 times.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div data-aos='fade-left' className="card card-size">
                            <div className="card-body card-custom">
                                <h5 className="card-title">Two Heads, One Bullet</h5>
                                <p className="card-text">Kill or incapacitate 2 enemies with the same sniper rifle shot.</p>
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

export default Cyberpunk