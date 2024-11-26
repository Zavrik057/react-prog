
import Button from "./button"
import '../CSS/group_card.css'
import { useInView } from "react-intersection-observer";

function GroupCard({ data }) {

   const [group, isInView] = useInView({threshold: 0.2, triggerOnce: true});

   return (
      <>
         <div className="groups-card" ref={group}>
            <div className="groups-card__background">
               <div className="groups-card__background-item"></div>
            </div>
            <div className="group-card__content">
               <div className="group-card__image">{isInView ? <img src={data.image} alt="" /> : <div className="fake__image"></div>}</div>
               <div className="group-card__name">{data.name}</div>
               <div className="group-card___button"><Button color={'rgb(29, 24, 53)'}>visite</Button></div>
            </div>
         </div>
      </>);
}

export default GroupCard;