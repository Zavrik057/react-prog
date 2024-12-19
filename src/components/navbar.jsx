
import '../CSS/navbar.css'
import Cube from './cube';
import { Link } from 'react-router-dom';
import { useState, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { nav } from 'framer-motion/client';
import { useInView } from 'react-intersection-observer';
import Likes from './likes';

// gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {

   const [click, setClick] = useState(false);

   function handleClick() {
      setClick((prev) => !prev);
   }

   return (
      <>
         <div className='navbar'>
            <div className={click ? 'likes-menu _active' : 'likes-menu'}>
               <div className="likes-menu__content">
                  {'nothing :('}
               </div>
            </div>
            <div className="navbar__body">
               <div className="container">
                  <div className="navbar__display">
                     <div className="navbar__logo">
                        <img src="../pictures/rock_logo.png" alt="" />
                     </div>
                     <div className="navbar-list">
                        <ul>
                           <li>
                              <Link to='/' className='navbar-list__item'>
                                 about
                              </Link>
                           </li>
                           <li>
                              <Link to='/' className="navbar-list__item">
                                 top
                              </Link>
                           </li>
                           <li>
                              <Link to='/scorpions' className="navbar-list__item">
                                 bands
                              </Link>
                           </li>
                           <li>
                              <Link to='/scorpions/0' className="navbar-list__item">
                                 albums
                              </Link>
                           </li>
                        </ul>
                     </div>
                     <Likes click={handleClick} />
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}