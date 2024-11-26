
import '../CSS/navbar.css'
import Cube from './cube';
import { Link } from 'react-router-dom';
import { useState, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { nav } from 'framer-motion/client';
import { useInView } from 'react-intersection-observer';

// gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {

   // const [navbar, isInView] = useInView({ threshold: 0, triggerOnce: false });
   const navbar = useRef(null);
   const navbarLogo = useRef(null);

   useLayoutEffect(() => {
      const anim = gsap.context(() => {
         const time = gsap.timeline({
            scrollTrigger: {
               target: navbar.current,
               start: 'bottom 90vh',
               end: '+=50vh',
               scrub: true,
            }
         });
         time.to(navbarLogo.current,
            {
               smoothOrigin: 2,
               width: '8vh',
               borderBottom: '4px solid transparent',
               borderLeft: '4px solid transparent',
            }, 1);
      });

      return () => anim.revert();
   }, []);


   // const cubesStatic = [
   //    ['3em', -4, 1, 20, 30],
   //    ['6em', -10, 6, 20, -34],
   //    ['2.2em', -150, 8, 50, 67],
   //    ['5em', -85, 14, 20, -34],
   //    ['4em', -6, 15, 60, 13],
   //    ['3em', -40, 20, 50, 23],
   //    ['6em', -20, 27, 67, 50],
   //    ['2.5em', -16, 24, 54, 43],
   //    ['3.4em', -45, 30, 43, 34],
   //    ['5em', -80, 35, 31, 78],
   //    ['4em', -15, 41, 21, 67],
   //    ['3em', -40, 46, 43, 23],
   //    ['6.3em', -83, 47, 43, 23],
   //    ['3em', -24, 47, 43, 23],
   //    ['2.3em', -12, 51, 50, 60],
   //    ['5em', -42, 55, 31, 12],
   //    ['3.4em', -23, 57, 78, 32],
   //    ['1.7em', -32, 62, 65, 43],
   //    ['4.1em', -50, 66, 23, 32],
   //    ['3.7em', -90, 67, 45, 45],
   //    ['3em', -6, 70, 53, 67],
   //    ['6em', -50, 73, 47, 42],
   //    ['2.8em', -32, 80, 60, 60],
   //    ['5em', -43, 83, 43, 14],
   //    ['4em', -10, 87, 84, 27],
   //    ['2.8em', -32, 90, 42, 16],
   //    ['4.5em', -10, 93, 56, 32],
   //    ['3em', -100, 94, 57, 73],
   //    ['2.4em', -5, 99, 34, 34],
   // ];
   // const cubesAnim = [
   //    ['2em', 20, 4, 30, 60],
   //    ['3em', 30, 8, 40, 70],
   //    ['2em', 60, 12, 20, 20],
   //    ['3em', 20, 16, 34, 62],
   //    ['2em', 70, 20, 23, 56],
   //    ['3em', 30, 24, 79, 43],
   //    ['2em', 25, 28, 34, 45],
   //    ['3em', 20, 32, 30, 60],
   //    ['2em', 40, 40, 43, 45],
   //    ['2em', 50, 44, 33, 32],
   //    ['3em', 30, 48, 45, 60],
   //    ['2em', 20, 52, 40, 60],
   //    ['3em', 40, 56, 20, 70],

   // ]

   return (
      <>
         <div className='navbar' ref={navbar}>
            {/* <div className="navbar__motion">
               <div className="navbar__cubes">
                  {cubesStatic.map((item, index) => <Cube key={index} data={item} color={'rgb(214, 83, 36)'} index={index} />)}
               </div>
            </div> */}
            {/* {cubesAnim.map((item, index) => <Cube anim={true} key={index} data={item} />)} */}
            <div className="navbar__body">
               <div className="container">
                  <div className="navbar__display">
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
                        </ul>
                     </div>
                     <div className="navbar__logo">
                        <div ref={navbarLogo} className="navbar__logo-item"><img src="../pictures/rock_logo.png" alt="" /></div>
                     </div>
                     <div className="navbar-list">
                        <ul>
                           <li>
                              <Link to='/' className="navbar-list__item">
                                 bands
                              </Link>
                           </li>
                           <li>
                              <Link to='/album/1' className="navbar-list__item">
                                 albums
                              </Link>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}