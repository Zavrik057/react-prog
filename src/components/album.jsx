

import { useInView } from "react-intersection-observer"
import { Link } from "react-router-dom";
import { source } from "../data/player__data";

export default function Album({ item, index }) {

   const [album, isAlbum] = useInView({ threshold: 0.3, triggerOnce: true });

   return (
      <>
         <Link to={'/album/' + index}>
            <div className="album" ref={album}>
               <a className="album__image" src="">
                  <div className="album__image-display">
                     {isAlbum ? <img src={item.image} alt="" /> : <div className="album__fake"></div>}
                  </div>
               </a>
               <div className="album__name">{item.album}</div>
               <div className="album__year"></div>
            </div>
         </Link>
      </>
   )
}