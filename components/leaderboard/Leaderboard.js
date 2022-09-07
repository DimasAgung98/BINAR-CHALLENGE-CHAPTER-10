import React, { useEffect } from 'react';
import Aos from 'aos';
import Table from './Table';

function Leaderboard() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    return (
        <>
            <div className='container-fluid bg-light leaderboard-page ptb'>
                <div className='row pt-5 pb-3'>
                    <div className='col-12 text-center'>
                        <h1 className='fw-bold'>TOP <p className='text-players'>PLAYERS</p></h1>
                    </div>
                </div>
                <div data-aos='zoom-out' className='container bg-light'>
                    <div className='row mb-3 mx-3'>
                        <div className='col-10'>
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        </div>
                        <div className='col-2'>
                            <button className="btn btn-outline-danger btn-leader" type="submit">Search</button>
                        </div>
                    </div>
                </div>
                <Table />
            </div>
        </>
    )
}

export default Leaderboard