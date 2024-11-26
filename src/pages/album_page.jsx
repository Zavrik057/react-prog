
import Player from "../components/player"
import { source } from '../data/player__data'
import Header from "../components/header"
import AlbumInfo from "../components/album_info.jsx"
import AlbumTop from "../components/album_top.jsx"
import { useState } from "react"
import { useParams } from "react-router-dom"

export default function AlbumPage() {

   const { id } = useParams();

   return (
      <>
         <Player MUSIC={source['metallica'].albums[id]} />
         <AlbumInfo data={source['metallica'].albums[id]} />
         <AlbumTop data={source['metallica'].albums[id].top} />
      </>
   )
}