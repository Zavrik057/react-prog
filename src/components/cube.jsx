
import '../CSS/cube.css';
import { useLayoutEffect, useRef } from 'react'
import { head } from 'framer-motion/client';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useInView } from 'react-intersection-observer';
gsap.registerPlugin(ScrollTrigger);

export default function Cube({ key, anim, data, color, index }) {
   const [size, bottom, left, x, y] = data;

   const [cube, isScroled] = useInView({threshold: 0});

   // const cube = useRef();
   // useLayoutEffect(() => {
   //    const anim = gsap.context(() => {
   //       const rotation = gsap.timeline({
   //          scrollTrigger: {
   //             target: cube.current,
   //             scrub: true,
   //             start: 'top bottom',
   //          }
   //       });
   //       rotation.to(cube.current, { rotateY: -360, rotateX: -360, rotateZ: 90, duration: 2, repeat: 3 }, 0);
   //    });

   //    return () => anim.revert();
   // });

   return (
      <>
         <div ref={cube} className={index== 10 && isScroled ? 'cube anim' : 'cube'} style={{transform: `rotateX(${x}deg) rotateY(${y}deg)`, bottom: `${bottom}%` , left: `${left}%` }}>
            <div className="cube__front" style={{border: `5px solid ${color}`, transform: `translateZ(calc(${size} / 2)) `, width: `${size}` }}><img src="../pictures/headphones.png" alt="" /></div>
            <div className="cube__back" style={{border: `5px solid ${color}`, transform: `translateZ(calc(${size} / -2))`, width: `${size}` }}><img src="../pictures/headphones.png" alt="" /></div>
            <div className="cube__right" style={{border: `5px solid ${color}`, transform: `translateX(calc(${size} / 2)) rotateY(90deg)`, width: `${size}` }}><img src="../pictures/headphones.png" alt="" /></div>
            <div className="cube__left" style={{border: `5px solid ${color}`, transform: `translateX(calc(${size} / -2)) rotateY(90deg)`, width: `${size}` }}><img src="../pictures/headphones.png" alt="" /></div>
            <div className="cube__top" style={{border: `5px solid ${color}`, transform: `translateY(calc(${size} / -2)) rotateX(90deg)`, width: `${size}` }}><img src="../pictures/headphones.png" alt="" /></div>
            <div className="cube__bottom" style={{border: `5px solid ${color}`, transform: `translateY(calc(${size} / 2)) rotateX(90deg)`, width: `${size}` }}><img src="../pictures/headphones.png" alt="" /></div>
         </div>
      </>
   )
}