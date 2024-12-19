
import '../CSS/banner.css'
import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Banner({ children }) {

   const banner = useRef(null);
   const bannerText = useRef(null);

   useLayoutEffect(() => {
      const anim = gsap.context(() => {
         const transition = gsap.timeline({
            scrollTrigger: {
               target: banner.current,
               scrub: true,
               start: 'top center',
               end: 'bottom top',
               
            }
         });
         transition.to(bannerText.current, {left: '50%'}, 0);
      });

      return () => anim.revert();
   });

   return (
      <>
         <div className="banner__banner" ref={banner}>
            <div className="banner__text" ref={bannerText}>{children}</div>
         </div>
      </>
   );
}

export default Banner;