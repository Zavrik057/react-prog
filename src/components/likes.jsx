

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../CSS/likes.css'
import { useState } from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function Likes({ click }) {

   const [count, setCount] = useState(0);

   return (
      <>
         <div className="likes">
            <div className="likes__icon" onClick={click}><FontAwesomeIcon icon={faHeart} /></div>
            <div className="likes__count">{count}</div>
         </div>
      </>
   );
}

export default Likes;