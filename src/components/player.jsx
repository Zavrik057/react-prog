
import '../CSS/player.css'
import { useState, useRef, useEffect } from 'react';

export default function Player({ MUSIC }) {
   const [currentSong, setCurrentSong] = useState(0);
   const [isPlaing, setIsPlaying] = useState(false);
   const [widthDuration, setWidthDuration] = useState(0);
   const [songDuration, setSongDuration] = useState(0);
   const [songCurrentTime, setSongCurrentTime] = useState(0);
   const audioElem = useRef();
   const line = useRef();

   useEffect(() => {
      if (isPlaing) {
         audioElem.current.play();
      } else {
         audioElem.current.pause();
      }
   }, [isPlaing, currentSong]);

   function PrevMusic() {
      currentSong === 0 ? setCurrentSong(MUSIC.length - 1) : setCurrentSong((prev) => prev - 1);
   }
   function NextMusic() {
      currentSong + 1 === MUSIC.length ? setCurrentSong(0) : setCurrentSong((prev) => prev + 1);
   }
   function loadMusic() {
      setIsPlaying((prev) => !prev);
   }

   function loadData(e) {
      setSongDuration(audioElem.current.duration);
      setSongCurrentTime(audioElem.current.currentTime);
      if (Math.floor(e.target.currentTime / 60) == Math.floor(audioElem.current.duration / 60) &&
         Math.floor(e.target.currentTime % 60) == Math.floor(audioElem.current.duration % 60)) {
         currentSong + 1 === MUSIC.length ? setCurrentSong(0) : setCurrentSong((prev) => prev + 1);
      };
   }
   let lineWidth = (songCurrentTime / songDuration) * 100;

   function changeTime(e) {
      let lineWidthVal = line.current.clientWidth;
      let clickedPosition = e.nativeEvent.offsetX;
      let songDuration = audioElem.current.duration;

      audioElem.current.currentTime = (clickedPosition / lineWidthVal) * songDuration;
      setIsPlaying(true);
   }

   return (
      <>
         <div className="player">
            <div className="player__image"><img src={MUSIC[currentSong].image} alt="" /></div>
            <div className="player__song">{MUSIC[currentSong].name}</div>
            <div className="player__group">{MUSIC[currentSong].group}</div>
            <div className="player__menu">
               <div className="player__aria">
                  <audio src={MUSIC[currentSong].src} ref={audioElem} onTimeUpdate={loadData}></audio>
                  <div className="player__line" ref={line} onClick={changeTime}>
                     <div
                        className="player__index"
                        style={{ minWidth: `${lineWidth}%` }}
                     ></div>
                  </div>
               </div>
               <div className="player__buttons">
                  <div className="player__prev" onClick={PrevMusic}><i class='bx bx-skip-previous'></i></div>
                  <div className="player__play" onClick={loadMusic}><i className={isPlaing ? 'bx bx-pause' : 'bx bx-play'}></i></div>
                  <div className="player__next" onClick={NextMusic}><i class='bx bx-skip-next' ></i></div>
               </div>
            </div>
         </div>
      </>
   )
}