

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../CSS/likes.css'
import { useCallback, useContext, useState } from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { GlobalState } from "./App";

function Likes({ click }) {

   const { likes } = useContext(GlobalState);

   return (
      <>
         <div className="likes">
            <div className="likes__icon" onClick={click}><FontAwesomeIcon icon={faHeart} /></div>
            <div className="likes__count">{likes.length}</div>
         </div>
      </>
   );
}

export default Likes;