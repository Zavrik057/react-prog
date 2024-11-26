
import '../CSS/albums.css'
import { source } from '../data/player__data'
import { useInView } from 'react-intersection-observer';
import Album from './album';

export default function Albums() {

   const albumsArr = source['metallica'].albums;
   return (
      <>
         <div className="albums">
            <div className="container">
               <div className="albums__display">
                  {albumsArr.map((item, index) => {
                     return <Album item={item} index={index}/>
                  })}
               </div>
            </div>
         </div>
      </>
   )
}