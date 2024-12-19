
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../CSS/like.css'
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

function Like({ data }) {

   const [liked, isLiked] = useState(false);
   // const [name, group, image] = data;

   // const dispatch = useDispatch();
   // const songs = useSelector(state => state.songs);

   // const addSong = () => {
   //    const song = {
   //       name: name,
   //       group: group,
   //       image: image,
   //    }
   //    dispatch({ type: 'addSong', payload: [song] });
   // }

   function handleClick() {
      isLiked((prev) => !prev);
   }
   return (
      <>
         <div onClick={() => {
            handleClick();
            // addSong();
         }} className={liked ? 'like _liked' : 'like'}><FontAwesomeIcon icon={faHeart} /></div>
      </>
   );
}

export default Like;