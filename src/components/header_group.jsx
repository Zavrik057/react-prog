
import { Link } from 'react-router-dom';
import Button from './button';
import '../CSS/header_group.css'
import { useInView } from "react-intersection-observer"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';

function HeaderGroup({ data }) {

   const [headerGroup, isInView] = useInView({ triggerOnce: true, threshold: 0 });
   const [cercle_1, isInViewCercle_1] = useInView({ triggerOnce: true, threshold: 0 });
   const [cercle_2, isInViewCercle_2] = useInView({ triggerOnce: true, threshold: 0 });
   const [cercle_3, isInViewCercle_3] = useInView({ triggerOnce: true, threshold: 0 });

   return (
      <>
         <div className="header-group" ref={headerGroup}>
            <div className="container">
               <div className="header-group__display">
                  <div className="header-group__main">
                     <div className="back _back-1">
                        <div className="back__content">
                           <div className="back__icon"><FontAwesomeIcon icon={faPlay} /></div>
                        </div>
                     </div>
                     <div className="back _back-2">
                        <div className="back__content">
                           <div className="back__icon"><FontAwesomeIcon icon={faPause} /></div>
                        </div>
                     </div>
                     <div className="header-group__group">{data.group}</div>
                     <div className="header-group__info">{`${data.years} | ${data.albums} studio albums`}</div>
                     <div className="header-group__links">
                        <div className="header-group__link"></div>
                        <div className="header-group__link"></div>
                     </div>
                     <Link to={data.site}><Button>visite group</Button></Link>
                  </div>
                  <div className="header-group__decor">
                     <div className={isInView ? 'header-group__skew _anim' : 'header-group__skew'}></div>
                     <img className="header-group__image" src='../pictures/header_group_picture.png' />
                     <div className="header-group__shadow _shadow-1"></div>
                     <div className="header-group__shadow _shadow-2"></div>
                     <div className="header-group__shadow _shadow-3"></div>
                     <div ref={cercle_1} className={isInViewCercle_1 ? "header-group__cercle _cercle-1 _anim" : "header-group__cercle _cercle-1"}></div>
                     <div ref={cercle_2} className={isInViewCercle_1 ? "header-group__cercle _cercle-2 _anim" : "header-group__cercle _cercle-2"}></div>
                     <div ref={cercle_3} className={isInViewCercle_1 ? "header-group__cercle _cercle-3 _anim" : "header-group__cercle _cercle-3"}></div>
                  </div>
               </div>
            </div>
            <div className="header-group__footer"></div>
         </div>
      </>
   );
}

export default HeaderGroup;