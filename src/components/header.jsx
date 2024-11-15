
import { getSelectionRange } from '@testing-library/user-event/dist/utils';
import '../CSS/header.css'
import Navbar from './navbar'
import Cube from './cube';
import Guitar from './guitar';
import { useLayoutEffect, useRef } from 'react'
import { head } from 'framer-motion/client';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'boxicons'
gsap.registerPlugin(ScrollTrigger);

export default function Header() {

   const header = useRef(null);

   useLayoutEffect(() => {
      const anim = gsap.context(() => {
         const time = gsap.timeline({
            scrollTrigger: {
               target: header.current,
               start: 'center 5vh',
               end: 'bottom top',
               scrub: true,
            }
         });
      });

      return () => anim.revert();
   }, []);

   const guitars = [
      '../pictures/rock_guitar.png',
      '../pictures/guitar2.png',
      '../pictures/guitar3.png',
   ]

   return (
      <>
         <div className="header" ref={header}>
            <div className="header__main">
               <div className="container">
                  <div className="header__display">
                     <div className="header__side">
                        <div className="header__guitars">
                           {guitars.map((item, index) => <Guitar item={item} find={index} key={index}/>)}
                        </div>
                     </div>
                     <div className="header__side">
                        <div className="header__block">
                           <div className="header__banner banner">my</div>
                           <div className="header__heart"></div>
                           <div className="header__big-title big-title">favorite</div>
                           <div className="header__name big-title">rock groups</div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}