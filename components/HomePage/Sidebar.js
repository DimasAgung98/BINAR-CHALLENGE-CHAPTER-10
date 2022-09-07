import React from 'react';
import Link from 'next/link';

function Sidebar() {
    return (
        <>
            <div className='container-fluid bg-light sidebar-padding'>
                <div className='row'>
                    <div className='col-12 list-menu'>
                        <Link href='/home'><a><li>HOME</li></a></Link>
                        <Link href='/games/rps'><a><li>RPS</li></a></Link>
                        <Link href='/games/gta'><a><li>GTA V</li></a></Link>
                        <Link href='/games/fallguys'><a><li>FALLGUYS</li></a></Link>
                        <Link href='/games/dota'><a><li>DOTA 2</li></a></Link>
                        <Link href='/games/watchdogs'><a><li>WATCHDOGS</li></a></Link>
                        <Link href='/games/valorant'><a><li>VALORANT</li></a></Link>
                        <Link href='/games/cyberpunk'><a><li>CYBERPUNK</li></a></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar