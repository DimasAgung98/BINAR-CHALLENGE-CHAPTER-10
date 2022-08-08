import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
    return (
        <>
            <div className='container-fluid bg-white pt-5 px-5'>
                <div className='row px-5'>
                    <div className='col our-text'>
                        <h1>OUR GAMES</h1>
                        <p>There are many variations of the games you can played.</p>
                    </div>
                </div>
                <div className='row px-5 mb-4'>
                    <div className='col-lg-4 box'>
                        <Image src={Gta} class="img-fluid" alt="game" />
                    </div>
                    <div className='col-lg-4'>
                        <Image src={Fall} class="img-fluid" alt="game" />
                    </div>
                    <div className='col-lg-4'>
                        <Image src={Dot} class="img-fluid" alt="game" />
                    </div>
                </div>
                <div className='row px-5 mb-3'>
                    <div className='col-lg-4'>
                        <Image src={Watch} class="img-fluid" alt="game" />
                    </div>
                    <div className='col-lg-4'>
                        <Image src={Val} class="img-fluid" alt="game" />
                    </div>
                    <div className='col-lg-4'>
                        <Image src={Cyber} class="img-fluid" alt="game" />
                    </div>
                </div>
                <div className='row'>
                    <div className='text-center mt-2 mb-5'>
                        <Link href='./listgame'><Button className='btn-list' color='danger'>SEE ALL GAME LIST</Button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurGames