
import '../CSS/prev__memb.css'
import Button from "./button"
import { useState, useRef } from 'react';

export default function PrevMemb({ data }) {

   const [currentBullet, setCurrent] = useState(0);
   const [bulletIndex, setBulletIndex] = useState(0);
   const ref = useRef();

   let handleBullet = (index) => {

      setBulletIndex(index);

      if (currentBullet !== index) {
         ref.current.classList.add('active');
         setTimeout(() => {
            setCurrent(index);
         }, 450);

         setTimeout(() => {
            ref.current.classList.remove('active');
         }, 900);
      }
   }

   return (
      <>
         <div className="prev">
            <div className="container">
               <div className="prev__display">
                  <div className="prev__pictures">
                     <div className="prev__image" ref={ref}>
                        <div className="prev__decor">
                           <div className="prev__decor-image"><img src="../pictures/guitar.png" alt="" /></div>
                        </div>
                        <div className="prev__decor">
                           <div className="prev__decor-image"><img src="../pictures/guitar.png" alt="" /></div>
                        </div>
                        <div className="prev__image-display">
                           <div className="prev__image-anim"></div>
                        </div>
                        <img src={data[currentBullet].image[0]} alt="" />
                        <div className="prev__more-background back--1"></div>
                        <div className="prev__more-image more--1">
                           <div className="prev__more-display"><img src={data[currentBullet].image[1]} alt="" /></div>
                        </div>
                        <div className="prev__more-background back--2"></div>
                        <div className="prev__more-image more--2">
                           <div className="prev__more-display"><img src={data[currentBullet].image[2]} alt="" /></div>
                        </div>
                        <div className="prev__more-background back--3"></div>
                        <div className="prev__more-image more--3">
                           <div className="prev__more-display"><img src={data[currentBullet].image[3]} alt="" /></div>
                        </div>
                     </div>
                     <div className="bullets">
                        {data.map((item, index) => <div key={index} className={index !== bulletIndex ? 'bullet' : 'bullet current'} onClick={() => handleBullet(index)}></div>)}
                     </div>
                  </div>
                  <div className="prev__content">
                     <div className="prev__name">{data[currentBullet].name}</div>
                     <div className="prev__role">{data[currentBullet].role}</div>
                     <div className="prev__about"></div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}