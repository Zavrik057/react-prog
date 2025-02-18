
import Button from "./button"
import '../CSS/group_card.css'
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { GlobalState } from "./App";

function GroupCard({ data }) {

   const {currentGroup, setCurrentGroup} = useContext(GlobalState);
   const [group, isInView] = useInView({ threshold: 0.2, triggerOnce: true });

   function changeCurrentGroup(){
      setCurrentGroup(data.name);
   }

   return (
      <>
         <div className="groups-card" ref={group}>
            <div className="groups-card__background">
               <div className="groups-card__background-item"></div>
            </div>
            <div className="group-card__content">
               <Link onClick={changeCurrentGroup}  to={data.enable ? `/${currentGroup}` : null} className="group-card__image">
                  <div className="group-card__image-display">
                     {isInView ? <img src={data.image} alt="" /> : <div className="fake__image"></div>}
                  </div>
               </Link>
               <div className="group-card__name">{data.name}</div>
               <div className="group-card___button"><Button color={'rgb(29, 24, 53)'}>visite</Button></div>
            </div>
         </div>
      </>);
}

export default GroupCard;