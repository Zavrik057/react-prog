
import { useRef, useState } from 'react'
import '../CSS/top__songs.css'
import Button from './button';
import Stars from './stars';
import { Link } from 'react-router-dom';
import Banner from './banner';
import { useDispatch, useSelector } from 'react-redux';
import Like from './like';
export default function TopTen({ data }) {
   //const imageRef = useRef();
   //const [isColor, setColor] = useState(false);


   function changeColor(e) {
      if (e.target.classList.contains('bx')) {
         e.target.classList.toggle('active');
      }
   }
   return (
      <>
         <div className="top" style={{ color: 'white' }}>
            <Banner>top</Banner>
            <div className="container">
               <div className="top__display">
                  <div className="top__songs">
                     <div className="top__title title">top songs</div>
                     {
                        data[0].map((item, index) => {
                           return (
                              <>
                                 <div className="top__item" key={index}>
                                    <div className="top__place">{index + 1 < 10 ? `0${index + 1}` : index + 1}</div>
                                    <div className="top__image"><img src={item.image} alt="image" /></div>
                                    <div className="top__content">
                                       <div className="top__name">{`${item.name} / ${item.album}`}</div>
                                       <div className="top__duration"></div>
                                    </div>
                                    <div className="top__icon" onClick={changeColor}><i class='bx bxs-heart'></i></div>
                                    <Like data={[item.name, item.group, item.image]}/>
                                    <Link to={'/album/' + item.id}><Button color={'rgb(57, 246, 158)'}>check song</Button></Link>
                                 </div>
                              </>
                           )
                        })
                     }
                  </div>
                  <div className="top__albums">
                     <div className="top__title title">top albums</div>
                     <div className="top__albums-display">
                        {
                           data[1].map((item, index) => {
                              return (
                                 <div className="top__album" key={index}>
                                    <div className="top__album-place">{index + 1}</div>
                                    <div className="top__album-image" >
                                       <img src={item.image} alt="" />
                                    </div>
                                    <div className="top__album-content">
                                       <div className="top__album-name">{item.name}</div>
                                       <div className="top__album-year">{item.year}</div>
                                       <Stars />
                                    </div>
                                 </div>
                              )
                           })
                        }
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}