import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
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

function OurGames() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    return (
        <>
            <div className='container-fluid bg-white pt-5 px-5'>
                <div data-aos='fade-right' className='row px-5'>
                    <div className='col our-text'>
                        <h1>OUR GAMES</h1>
                        <p>There are many variations of the games you can played.</p>
                    </div>
                </div>
                <div data-aos='flip-down' className='row px-5 mb-4'>
                    <div className='col-lg-4 box'>
                        <Image src={Gta} className="img-fluid" alt="game" />
                    </div>
                    <div className='col-lg-4'>
                        <Image src={Fall} className="img-fluid" alt="game" />
                    </div>
                    <div className='col-lg-4'>
                        <Image src={Dot} className="img-fluid" alt="game" />
                    </div>
                </div>
                <div data-aos='flip-down' className='row px-5 mb-3'>
                    <div className='col-lg-4'>
                        <Image src={Watch} className="img-fluid" alt="game" />
                    </div>
                    <div className='col-lg-4'>
                        <Image src={Val} className="img-fluid" alt="game" />
                    </div>
                    <div className='col-lg-4'>
                        <Image src={Cyber} className="img-fluid" alt="game" />
                    </div>
                </div>
                <div data-aos='slide-up' className='row'>
                    <div className='text-center mt-2 mb-5'>
                        <Link href='./listgame'><Button className='btn-list' color='danger'>SEE ALL GAME LIST</Button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurGames