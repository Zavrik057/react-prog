
import '../CSS/album_top.css';
import Stars from '../components/stars';
function AlbumTop({ data }) {
   return (
      <>
         <div className="album-top">
            <div className="container">
               <div className="album-top__display">
                  {data.map((item, index) => <div className="album-top__item">
                     <div className="album-top__place">{item.id}</div>
                     <div className="album-top__podium">
                        {data.map((item) => <div className={index + 1 == item.id ? 'album-top__podium-item active' : 'album-top__podium-item'}></div>)}
                     </div>
                     <div className="album-top__name">{item.name}</div>
                     <Stars />
                  </div>)}
               </div>
            </div>
         </div>
      </>
   );
}

export default AlbumTop;