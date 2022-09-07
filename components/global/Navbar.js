import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
//IMPORT LOGO IMAGES
import NavbarLogo from '../../public/logoteamone.png';

function Navbar() {
  const { asPath } = useRouter()

  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-dark fixed-top'>
        <div className='container-fluid'>
          <div className='col-3'>
            {/* logo navbar */}
            <Link href='/' className='navbar-brand'><a className='decoration'>
              <div className='logo'>
                <Image src={NavbarLogo} alt="logo" />
              </div>
              <div className='navbar_text mb-4'>
                <h4>TEAM<span> ONE</span></h4>
              </div>
            </a></Link>
          </div>
          <div className='col-6'>
            {/* navbar list */}
            <div className='collapse navbar-collapse list-text' id='navbarSupportedContent'>
              <ul className="navbar-nav m-auto mb-lg-0">
                <li className="mx-3 text-nav">
                  <Link href="/"><a className={asPath === '/' ? 'list active' : 'list'}>HOME</a></Link>
                </li>
                <li className="mx-3">
                  <Link href="/listgame"><a className={asPath === '/listgame' ? 'list active' : 'list'}>LIST GAME</a></Link>
                </li>
                <li className="mx-3">
                  <Link href="/leaderboard"><a className={asPath === '/leaderboard' ? 'list active' : 'list'}>LEADERBOARD</a></Link>
                </li>
                <li className="mx-3">
                  <Link href="/support"><a className={asPath === '/support' ? 'list active' : 'list'}>SUPPORT</a></Link>
                </li>
              </ul>
            </div>
          </div>
          {/* button login and register */}
          <div className='col-3'>
            <div className='collapse navbar-collapse list-text justify-content-end' id='navbarSupportedContent'>
              <ul className="navbar-nav">
                <li className="nav-item mx-3">
                  <Link href="/register"><a className={asPath === '/register' ? 'list active' : 'list'}>REGISTER</a></Link>
                </li>
                <li className="nav-item mx-3">
                  <Link href="/login" activeClassName="active"><a className={asPath === '/login' ? 'list active' : 'list'}>LOGIN</a></Link>
                </li>
              </ul>
            </div>
            {/* hamburger button */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
              aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;