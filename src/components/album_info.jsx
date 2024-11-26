
import '../CSS/album_info.css'

export default function AlbumInfo({ data }) {
   return (
      <>
         <div className="album-info">
            <div className="container">
               <div className="album-info__display">
                  <div className="album-info__side">
                     <div className="album-info__main">
                        <div className="album-info__title title">ride the lightning</div>
                        <div className="album-info__block">
                           {data.main.map(item => <div className="album-info__text">{item.text}</div>)};
                        </div>
                     </div>
                  </div>
                  <div className="album-info__side">
                     <div className="album-info__content">
                        <div className="album-info__achieve">releases: <span>{data.content.release}</span></div>
                        <div className="album-info__achieve">records: <span>{data.content.record}</span></div>
                        <div className="album-info__achieve">studio: <span>{data.content.studio}</span></div>
                        <div className="album-info__achieve">genre: <span>{data.content.genre}</span></div>
                        <div className="album-info__achieve">length: <span>{data.content.length}</span></div>
                        <div className="album-info__achieve">label: <span>{data.content.label}</span></div>
                        <div className="album-info__achieve">producer: <span>{data.content.producer}</span></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}