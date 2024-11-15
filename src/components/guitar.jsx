
import '../CSS/guitar.css'
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer'

export default function Guitar({ item, find, key }) {

   const [guitar, IsInView] = useInView({ threshold: 0 });

   return (
      <>
         <div className={IsInView ? 'guitar active' : 'guitar'}
            ref={guitar}
            style={
               {
                  transform: find == 2 ? 'rotate(90deg)' : null,
               }
            }>
            <div className="guitar__image">
               <img src={item} alt="" />
            </div>
         </div>
      </>
   )
}