
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../CSS/like.css'
import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { GlobalState } from "./App";

function Like({ data, isAddedItem }) {

   const { setLikes, likes, info, setInfo } = useContext(GlobalState);
   const [liked, isLiked] = useState(false);
   const [name, group, image, isAdded] = data;
   const [currentIndex, setCurrentIndex] = useState(null);

   useEffect(() => {
      setCurrentIndex(prev => prev - 1);
   }, [likes]);

   const newItem = {
      Id: Date.now(),
      name: name,
      group: group,
      image: image,
   }

   function addItem() {
      if (!info.includes(name + group)) {
         setCurrentIndex(likes.length);
         setLikes([...likes, newItem]);
         setInfo([...info, name + group]);
      } else {
         let num = info.findIndex((item) => item == name + group);
         setInfo(info.filter((item) => item != name + group));
         setLikes(likes.filter((item, index) => index != currentIndex));
      }
      console.log(info);
   }
   function handleClick() {
      isLiked((prev) => !prev);
   }
   return (
      <>
         <div onClick={() => {
            handleClick();
            addItem();
         }} className={liked ? 'like _liked' : 'like'}><FontAwesomeIcon icon={faHeart} /></div>
      </>
   );
}

export default Like;