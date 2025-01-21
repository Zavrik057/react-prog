
import '../CSS/navbar.css'
import Cube from './cube';
import { Link } from 'react-router-dom';
import { useState, useLayoutEffect, useRef, useContext } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { nav } from 'framer-motion/client';
import { useInView } from 'react-intersection-observer';
import Likes from './likes';
import { GlobalState } from './App';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {

   const { likes, setLikes } = useContext(GlobalState);

   const [click, setClick] = useState(false);

   function handleClick() {
      setClick((prev) => !prev);
   }
   function removeLike(ind) {
      setLikes(likes.filter((item, index) => index != ind));
   }

   return (
      <>
         <div className='navbar'>
            <div className={click ? 'likes-menu _active' : 'likes-menu'}>
               <div className="likes-menu__content">
                  {likes.map(((item, index) => <div className="likes-item">
                     <div className="likes__image">
                        <img src={item.image} alt="" />
                     </div>
                     <div className="likes__text">
                        <div className="likes__name">{item.name}</div>
                        <div className="likes__group">{item.group}</div>
                     </div>
                     <div className="likes__remove" onClick={() => removeLike(index)}>
                        <FontAwesomeIcon className='likes__remove-icon' icon={faXmark} />
                     </div>
                  </div>))}
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