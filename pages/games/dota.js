import React, { useRef, useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import Link from 'next/link';
import Aos from 'aos';
import { useRouter } from 'next/router';
import Swal from 'sweetalert2';
import Dot from '../../public/dota.jpg';
import { Button } from 'reactstrap';
import Head from 'next/head';
//IMPORT COMPONENTS PAGES
import Sidebar from '../../components/HomePage/Sidebar';
import Footer from '../../components/global/Footer';
import Navhome from '../../components/HomePage/Navhome';
import Table from '../../components/leaderboard/Table';

// import dispatch and action (Redux)
import { useDispatch, useSelector } from 'react-redux';
import { addGameHistory } from '../../features/gameHistory/gameHistorySlice';

const sources = {
    youtube: 'https://www.youtube.com/watch?v=SmnqsdeHFT0',
}

const Dota = () => {
    const ref = useRef();
    const [source, setSource] = useState(sources.youtube);
    const [playing, setPlaying] = useState(false);

    const play = () => setPlaying(true);

    // Put useDispatch and into variable
    const dispatch = useDispatch();
    // Put gameHistory store's data into variable
    const gameHistory = useSelector(state => state.gameHistory.gameId)


    const router = useRouter()
    useEffect(() => {
        const isAuthenticated = localStorage.getItem('isAuthenticated');
        Aos.init({ duration: 2000 });

        if (isAuthenticated) {
            // router.push('/games/dota');
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

    if (gameHistory.includes(4)) {
        playedGameDetector = <div className='played-game'>You&apos;ve Played This Game</div>
    }

    // ONCLICK 'PLAY NOW'
    const addGameIdToHistory = () => {
        console.log('fungsi addGameIdToHistory dijalankan')

        // add Game ID to gameHistory Store if id not detected
        if (!gameHistory.includes(4)) {
            dispatch(addGameHistory(4))
            console.log('id belum ada, dan sudah ditambahkan ke store')
        }

        // direct to game
        // theres no game yet
    }

    return (
        <>
            <Head>
                <title>DOTA 2 | TEAM ONE</title>
            </Head>
            <Navhome />
            <Sidebar />
            <div className='container-fluid bg-white'>
                <div className='row justify-content-center'>
                    <div data-aos='fade-right' className='col-6 px-5 py-5 game-text'>
                        {playedGameDetector}
                        <h1 className='text-game-title'>DOTA 2</h1>
                        <p>Every day, millions of players worldwide enter the battle as one of over a hundred Dota Heroes in a 5v5 team clash. Dota is the deepest multi-player action RTS game ever made and there always a new strategy or tactic to discover. Its completely free to play and always will be start defending your ancient now.</p>
                        <div>
                            <Button onClick={addGameIdToHistory} color="warning" outline size="md">
                                PLAY NOW
                            </Button>
                        </div>
                    </div>
                    <div data-aos='fade-left' className='col-6 px-5 py-5 img-game'>
                        <ReactPlayer className='react-player'
                            ref={ref}
                            url={source}
                            playing={playing}
                        />
                    </div>
                </div>
                <div className="row px-5 py-5 bg-light">
                    <div className='pb-3'>
                        <h2 className='text-center fw-bold'>GAME ACHIEVEMENT</h2>
                    </div>
                    <div data-aos='fade-right' className="col-sm-3">
                        <div className="card card-size">
                            <div className="card-body card-custom">
                                <h5 className="card-title">Rampage</h5>
                                <p className="card-text">Get 3 rampages on one match.</p>
                            </div>
                        </div>
                    </div>
                    <div data-aos='fade-right' className="col-sm-3">
                        <div className="card card-size">
                            <div className="card-body card-custom">
                                <h5 className="card-title">Support Master</h5>
                                <p className="card-text">Win as support 10 times.</p>
                            </div>
                        </div>
                    </div>
                    <div data-aos='fade-left' className="col-sm-3">
                        <div className="card card-size">
                            <div className="card-body card-custom">
                                <h5 className="card-title">Crazy Rich</h5>
                                <p className="card-text">Collect 10 items of arcana.</p>
                            </div>
                        </div>
                    </div>
                    <div data-aos='fade-left' className="col-sm-3">
                        <div className="card card-size">
                            <div className="card-body card-custom">
                                <h5 className="card-title">Party Time</h5>
                                <p className="card-text">Play as leader party 10 times.</p>
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

export default Dota