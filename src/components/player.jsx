
import '../CSS/player.css'
import { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPause, faPlay, faForwardStep, faBackwardStep } from '@fortawesome/free-solid-svg-icons'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useTime } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

export default function Player({ MUSIC }) {
   const [currentSong, setCurrentSong] = useState(0);
   const [isPlaing, setIsPlaying] = useState(false);
   const [widthDuration, setWidthDuration] = useState(0);
   const [songDuration, setSongDuration] = useState(0);
   const [songCurrentTime, setSongCurrentTime] = useState(0);
   const audioElem = useRef();
   const line = useRef();
   const background = useRef();
   const player = useRef();

   useEffect(() => {
      if (isPlaing) {
         audioElem.current.play();
      } else {
         audioElem.current.pause();
      }
   }, [isPlaing, currentSong]);

   function PrevMusic() {
      currentSong === 0 ? setCurrentSong(MUSIC.tracks.length - 1) : setCurrentSong((prev) => prev - 1);
   }
   function NextMusic() {
      currentSong + 1 === MUSIC.tracks.length ? setCurrentSong(0) : setCurrentSong((prev) => prev + 1);
   }
   function loadMusic() {
      setIsPlaying((prev) => !prev);
   }

   function loadData(e) {
      setSongDuration(audioElem.current.duration);
      setSongCurrentTime(audioElem.current.currentTime);
      if (Math.floor(e.target.currentTime / 60) == Math.floor(audioElem.current.duration / 60) &&
         Math.floor(e.target.currentTime % 60) == Math.floor(audioElem.current.duration % 60)) {
         currentSong + 1 === MUSIC.tracks.length ? setCurrentSong(0) : setCurrentSong((prev) => prev + 1);
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

   useLayoutEffect(() => {
      const anim = gsap.context(() => {
         const time = gsap.timeline({
            scrollTrigger: {
               target: document.documentElement,
               start: 0,
               end: '+=400px',
               scrub: true,
               markers: true,
               ScrollTimeline: '3'
            }
         });
         // time.to(background.current, {width: '120vw', borderRadius: '0px', top: '0px', transform: 'translate(-50%, 0px)', smoothOrigin: 3}, 1);
      });

      return () => anim.revert();
   }, []);

   return (
      <>
         <div className="player-block" ref={player} data-scroll data-scroll-speed="0.5">
            <div className="player__background" ref={background}></div>
            <div className="container">
               <div className="player__display">
                  <div className="player__side">
                    <img className='player__side-image' src="../pictures/headphones.png" alt="" />
                  </div>
                  <div className="player__side-player">
                     <div className="player">
                        <div className="player__shadow"></div>
                        <div className="player__shadow"></div>
                        <div className="player__shadow"></div>
                        <div className="player__image"><img src={MUSIC.image} alt="" /></div>
                        <div className="player-info">
                           <div className="player-info__text">
                              <div className="player__group">{MUSIC.tracks[0].group}</div>
                              <div className="player__song">{MUSIC.tracks[currentSong].name}</div>
                           </div>
                           <div className="player-info__icon"></div>
                        </div>
                        <div className="player__menu">
                           <div className="player__aria">
                              <audio src={MUSIC.tracks[currentSong].src} ref={audioElem} onTimeUpdate={loadData}></audio>
                              <div className="player__line" ref={line} onClick={changeTime}>
                                 <div
                                    className="player__index"
                                    style={{ minWidth: `${lineWidth}%` }}
                                 ></div>
                              </div>
                           </div>
                           <div className="player__buttons">
                              <div className="player__prev" onClick={PrevMusic}><FontAwesomeIcon icon={faBackwardStep} /></div>
                              <div className="player__play" onClick={loadMusic}>{isPlaing ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon className='icon' icon={faPlay} />}</div>
                              <div className="player__next" onClick={NextMusic}><FontAwesomeIcon icon={faForwardStep} /></div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* <div className="player">
            <div className="player__image"><img src={MUSIC[currentSong].image} alt="" /></div>
            <div className="player__song">{MUSIC[currentSong].name}</div>
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
         </div> */}
      </>
   )
}