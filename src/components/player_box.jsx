
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import PlayerSwiper from "./player_swiper";
import '../CSS/player_box.css'

function PLayerBox({ data, type, slides, reset, group}) {
   return (
      <>
         <div className="player-more">
            <div className="player-more__row">
               <div className="player-more__title">{type}</div>
               <div className="player-more__buttons">
                  <div className={'player-more__prev' + type}><FontAwesomeIcon icon={faArrowLeft} /></div>
                  <div className={'player-more__next' + type}><FontAwesomeIcon icon={faArrowRight} /></div>
               </div>
            </div>
            <div className="player-more__display"><PlayerSwiper data={data} prev={'.player-more__prev' + type} next={'.player-more__next' + type} type={type} slides={slides} reset={reset} group={group}/></div>
         </div>
      </>
   );
}

export default PLayerBox;