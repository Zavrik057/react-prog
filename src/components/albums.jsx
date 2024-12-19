
import '../CSS/albums.css'
import { useInView } from 'react-intersection-observer';
import Album from './album';
import Banner from './banner';

export default function Albums({ data, group }) {

   return (
      <>
         <div className="albums">
            <Banner>albums</Banner>
            <div className="container">
               <div className="albums__display">
                  {data.map((item, index) => <Album key={index} item={item} index={index} group={group} />)}
               </div>
            </div>
         </div>
      </>
   )
}