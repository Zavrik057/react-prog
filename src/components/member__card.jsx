
import { computeHeadingLevel } from '@testing-library/react';
import '../CSS/members__card.css';
import { useRef } from 'react';
import { useInView } from 'react-intersection-observer';

export default function MemberCard({ image }) {
   const [card, isScroled] = useInView({threshold: 0.4, triggerOnce: true});
   let decor = useRef();
   return (
      <>
         <div className="card"
            ref={card}
            style={
               {
                  opacity: isScroled ? '1' : '0',
                  transition: 'all 0.6s ease 0.3s',
                  transform: isScroled ? 'translateX(0px)' : 'translateX(10%)',
               }}
         >
            <div className="content">
               <div className="image">
                  <img src={image} alt="" />
               </div>
               <div className="decor" ref={decor}>
                  <div className="decor__item"></div>
                  <div className="decor__item"></div>
                  <div className="decor__item"></div>
                  <div className="decor__item"></div>
                  <div className="decor__item"></div>
                  <div className="decor__item"></div>
                  <div className="decor__item"></div>
                  <div className="decor__item"></div>
                  <div className="decor__item"></div>
                  <div className="decor__item"></div>
                  <div className="decor__item"></div>
               </div>
            </div>
            <div className="shape">
               <div className="shape__label shape__label--1"></div>
               <div className="shape__label shape__label--2"></div>
               <div className="shape__label shape__label--3"></div>
            </div>
         </div>
      </>
   );
}