
import '../CSS/top__songs.css'
import { Button } from "./button"
export default function TopTen({ data }) {
   return (
      <>
         <div className="top" style={{ color: 'white' }}>
            <div className="container">
               <div className="top__display">
                  <div className="top__songs">
                     <div className="top__title title"></div>
                     {
                        data[0].map((item, index) => {
                           return (
                              <>
                                 <div className="top__item">
                                    <div className="top__place">{index + 1 < 10 ? `0${index + 1}` : index + 1}</div>
                                    <div className="top__image"><img src={item.image} alt="image" /></div>
                                    <div className="top__content">
                                       <div className="top__name">{item.name}</div>
                                       <div className="top__album">{item.album}</div>
                                       <div className="top__duration">{item.duration}</div>
                                       <a href="" className="top__ref"><Button>check song</Button></a>
                                    </div>
                                 </div>
                              </>
                           )
                        })
                     }
                  </div>
                  <div className="top__albums">
                     <div className="top__title title"></div>
                     <div className="top__albums-display">
                        {
                           data[1].map((item) => {
                              return (
                                 <div className="top__album">
                                    <div className="top__album-image"><img src={item.image} alt="" /></div>
                                    <div className="top__album-name">{item.name}</div>
                                    <div className="top__album-year">{item.year}</div>
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