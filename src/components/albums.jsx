
import '../CSS/albums.css'
import { source } from '../data/player__data'
import { useInView } from 'react-intersection-observer';
import Album from './album';

export default function Albums(){

   let albumsArr = [];
   for(let item in source['metallica'].albums){
      albumsArr.push({name: item, image: source['metallica'].albums[`${item}`].image});
   }
   return (
      <>
      <div className="albums">
         <div className="container">
            <div className="albums__display">
               {albumsArr.map(item => {
                  return <Album item={item}/>
               })}
            </div>
         </div>
      </div>
      </>
   )
}