import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Aos from 'aos';
//IMPORT REACTSTRAP COMPONENTS
import { Button } from 'reactstrap';
//IMPORT LOGO IMAGES
import Cyber from '../../public/cyber.jpg';
import Gta from '../../public/gta.jpg';
import Watch from '../../public/wd.png';
import Val from '../../public/valo.jpg';
import Dot from '../../public/dota.jpg';
import Fall from '../../public/fall.jpg';
import Cs from '../../public/cs.jpg';
import Rps from '../../public/rps.png';
import apex from '../../public/apex.jpg';


function Listgame() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    return (
        <>
            <div className='container-fluid bg-white px-5 pt-5'>
                <div className='row px-5'>
                    <div data-aos='fade-right' className='col our-text'>
                        <h1>OUR GAMES</h1>
                        <p>There are many variations of the games you can played.</p>
                    </div>
                </div>
                <div data-aos='flip-down' className='row px-5 mb-4'>
                    <div className='col-lg-4 box'>
                        <Link href='/games/gta'><Image src={Gta} className="img-fluid" alt="game" /></Link>
                    </div>
                    <div className='col-lg-4'>
                        <Link href='/games/fallguys'><Image src={Fall} className="img-fluid" alt="game" /></Link>
                    </div>
                    <div className='col-lg-4'>
                        <Link href='/games/dota'><Image src={Dot} className="img-fluid" alt="game" /></Link>

                    </div>
                </div>
                <div data-aos='flip-down' className='row px-5 mb-3'>
                    <div className='col-lg-4'>
                        <Link href='/games/watchdogs'><Image src={Watch} className="img-fluid" alt="game" /></Link>
                    </div>
                    <div className='col-lg-4'>
                        <Link href='/games/valorant'><Image src={Val} className="img-fluid" alt="game" /></Link>
                    </div>
                    <div className='col-lg-4'>
                        <Link href='/games/cyberpunk'><Image src={Cyber} className="img-fluid" alt="game" /></Link>
                    </div>
                </div>
                <div data-aos='flip-down' className='row px-5 mb-3'>
                    <div className='col-lg-4'>
                        <Link href='/home'><Image src={Cs} className="img-fluid" alt="game" /></Link>
                    </div>
                    <div className='col-lg-4'>
                        <Link href='/games/rps'><Image src={Rps} className="img-fluid" alt="game" /></Link>
                    </div>
                    <div className='col-lg-4'>
                        <Link href='/home'><Image src={apex} className="img-fluid" alt="game" /></Link>
                    </div>
                </div>
                <div className='row'>
                    <div className='text-center mt-2 mb-5'>
                        <Link href='/home'><Button className='btn-list' color='danger'>SEE GAME DETAILS</Button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Listgame