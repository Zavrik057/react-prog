
import Player from "../components/player"
import { source } from '../data/player__data'
import Header from "../components/header"
import AlbumInfo from "../components/album_info.jsx"
import AlbumTop from "../components/album_top.jsx"
import { useState } from "react"
import { useParams } from "react-router-dom"

export default function AlbumPage() {

   const { album, id } = useParams();
   const params = useParams();
   console.log(album);
   console.log(params);

   return (
      <>
         <Player MUSIC={source[`${album}`].albums[id]} group={album} />
         <AlbumInfo data={source[`${album}`].albums[id]} />
         <AlbumTop data={source[`${album}`].albums[id].top} />
      </>
   )
}