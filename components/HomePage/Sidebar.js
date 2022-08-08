import React from 'react';
import Link from 'next/link';

function Sidebar() {
    return (
        <>
            <div className='container-fluid bg-light'>
                <div className='row'>
                    <div className='col-12 list-menu'>
                        <Link href='/home'><a><li>HOME</li></a></Link>
                        <Link href='/game/rock-paper-scissors'><li><a>RPS</a></li></Link>
                        <Link href='/game/gta'><a><li>GTA V</li></a></Link>
                        <Link href='/game/fall-guys'><a><li>FALLGUYS</li></a></Link>
                        <Link href='/game/dota'><a><li>DOTA 2</li></a></Link>
                        <Link href='/game/watch-dogs'><a><li>WATCHDOGS</li></a></Link>
                        <Link href='/game/valorant'><a><li>VALORANT</li></a></Link>
                        <Link href='/game/cyber-punk'><a><li>CYBERPUNK</li></a></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar