import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
    return (
        <>
            <div className='container-fluid bg-white pt-5 px-5 ptb'>
                <div className='row px-5'>
                    <div className='col our-text'>
                        <h1>OUR GAMES</h1>
                        <p>There are many variations of the games you can played.</p>
                    </div>
                </div>
                <div className='row px-5 mb-4'>
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
                <div className='row px-5 mb-3'>
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
                <div className='row px-5 mb-3'>
                    <div className='col-lg-4'>
                        <Image src={Cs} className="img-fluid" alt="game" />
                    </div>
                    <div className='col-lg-4'>
                        <Image src={Rps} className="img-fluid" alt="game" />
                    </div>
                    <div className='col-lg-4'>
                        <Image src={apex} className="img-fluid" alt="game" />
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