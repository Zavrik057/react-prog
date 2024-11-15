

import { useInView } from "react-intersection-observer"
export default function Album({ item }) {
   const [album, isAlbum] = useInView({ threshold: 0.3 , triggerOnce: true});

   return (
      <>
         <div className="album" ref={album}>
            <a className="album__image" src="">
               <div className="album__image-display">
                  {isAlbum ? <img src={item.image} alt="" /> : <div className="album__fake"></div>}
               </div>
            </a>
            <div className="album__name">{item.name}</div>
            <div className="album__year"></div>
         </div>
      </>
   )
}