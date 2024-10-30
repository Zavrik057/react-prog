
import '../CSS/members__card.css';
import { useRef } from 'react';

export default function MemberCard({image}) {
   let decor = useRef();
   return (
      <>
         <div className="card">
            <div className="content">
               <div className="image">
                  <img src={image} alt=""/>
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