
import '../CSS/stage.css'
import Button from './button';
import { useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

export default function Stage({ data }) {
   const [currentStage, setCurrentStage] = useState(1);
   const [stage, isInView] = useInView({threshold: 0.2});
   const slides = useRef();

   function handleStage(index) {
      setCurrentStage(index);
   }

   function prevSlide() {
      slides.current.prepend(slides.current.children[slides.current.children.length - 1]);
   }
   function nextSlide() {
      slides.current.appendChild(slides.current.children[0]);
   }
   /*setInterval(() => {
      if(isInView) slides.current.appendChild(slides.current.children[0]);
   }, 1500);*/

   return (
      <>
         <div className="stage">
            <div className="container">
               <div className="stage__display">
                  <div className="stage__slider">
                     <div className="stage__slides" ref={slides}>
                        {data[currentStage].images.map((item, index) => {
                           return (
                              <>
                                 <div className="stage__item" style={{ backgroundImage: `url('${item}')` }} key={index}>
                                    <div className="stage__inner">
                                       <div className="stage__content">
                                          <div className="stage__coutry">{data[currentStage].coutry}</div>
                                          <div className="stage__city">{data[currentStage].city}</div>
                                          <div className="stage__date">{data[currentStage].date}</div>
                                          <Button color={'rgb(57, 246, 158)'}>check performance</Button>
                                       </div>
                                    </div>
                                 </div>
                              </>
                           )
                        })}
                     </div>
                     <div className="stage__buttons">
                        <div className="stage__prev" onClick={prevSlide}><FontAwesomeIcon icon={faAngleLeft} /></div>
                        <div className="stage__next" onClick={nextSlide}><FontAwesomeIcon icon={faAngleRight} /></div>
                     </div>
                  </div>
                  <div className="stage__list">
                     {
                        data.map((item, index) => <div key={index} onClick={() => handleStage(index)} className={currentStage !== index ? 'stage__list-item' : 'stage__list-item current'}></div>)
                     }
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}