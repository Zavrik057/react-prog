
import '../CSS/player.css'
import { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPause, faPlay, faForwardStep, faBackwardStep, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faHeadphones } from '@fortawesome/free-solid-svg-icons';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import PLayerBox from './player_box';
import { source } from '../data/player__data';
import PlayerSwiper from './player_swiper';
import { main } from '../data/main__data';
import { feFuncR } from 'framer-motion/client';
import Popup from './popup';
import AlbumInfo from './album_info';

gsap.registerPlugin(ScrollTrigger);

export default function Player({ MUSIC, group }) {
   const [currentSong, setCurrentSong] = useState(0);
   const [isPlaing, setIsPlaying] = useState(false);
   const [widthDuration, setWidthDuration] = useState(0);
   const [songDuration, setSongDuration] = useState(0);
   const [songCurrentTime, setSongCurrentTime] = useState(0);
   const audioElem = useRef();
   const line = useRef();
   const background = useRef();
   const player = useRef();
   const songs = useRef();
   const [toggle, setToggle] = useState(false);

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
   function loadMusicTwo(e) {
      console.log(e);
      setIsPlaying(false);
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
   function changeMusic(index) {
      if(index === currentSong){
         loadMusic();
      } else {
         setIsPlaying(true);
         setCurrentSong(index);
      }
   }

   function resetSong() {
      setCurrentSong(0);
      setIsPlaying(false);
   }
   function handleToggle() {
      setToggle(prev => !prev);
   }
   return (

      <>
         <div className="player">
            <div className="player__content">
               <div className="player__menu">
                  <div className="player__image"><img src={MUSIC.image} alt="" /></div>
                  <div className={MUSIC.tracks.length > 6 ? 'player__songs player__songs--shade' : 'player__songs'} ref={songs}>
                     {MUSIC.tracks.map((item, index) =>
                        <div
                           onClick={() => changeMusic(index)}
                           className={currentSong === index ? 'song active' : 'song'}
                           key={index}
                        // style={{minHeight: `${songs.current.offsetHeight / 45}%`}}
                        >
                           <div className="song__number">{index + 1 < 10 ? '0' + (index + 1) : index + 1}</div>
                           <div className="song__image"><img src={MUSIC.image} alt="" /></div>
                           <div className="song__name">{item.name}</div>
                           <div className="song__like"></div>
                           <div className="song__play">{isPlaing && currentSong === index ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon className='icon' icon={faPlay} />}</div>
                        </div>)}
                  </div>
               </div>
               <div className="player__main">
                  <div className="player-box">
                     <div className="player-box__content">
                        <div className="player-box__album">{MUSIC.album}</div>
                        <div className="player-box__genres">
                           {MUSIC.genres.split(',').map((item, index) => <div key={index} className="player-box__genre">{item}</div>)}
                        </div>
                        <div className="player-box__popup" onClick={handleToggle}>i</div>
                        <Popup toggle={toggle} handleToggle={handleToggle}>
                           <AlbumInfo data={source[`${group}`].albums[1]} />
                        </Popup>
                     </div>
                     <div className="player-box__cubes">
                        <div className="player-box__cube"></div>
                        <div className="player-box__cube"></div>
                        <div className="player-box__cube"></div>
                        <div className="player-box__cube"></div>
                        <div className="player-box__cube"></div>
                        <div className="player-box__cube"></div>
                        <div className="player-box__cube"></div>
                        <div className="player-box__cube"></div>
                        <div className="player-box__cube"></div>
                        <div className="player-box__cube"></div>
                        <div className="player-box__cube"></div>
                        <div className="player-box__cube"></div>
                        <div className="player-box__cube"></div>
                        <div className="player-box__cube"></div>
                        <div className="player-box__cube"></div>
                        <div className="player-box__cube"></div>
                     </div>
                  </div>
                  <div className="player__slides">
                     <PLayerBox data={source[`${group}`].albums} type={'albums'} slides={6} reset={resetSong} group={group} />
                     <PLayerBox data={main.groups} type={'groups'} slides={9} group={group} />
                  </div>
               </div>
            </div>
            <div className="music">
               <div className="music__icon"><FontAwesomeIcon icon={faHeadphones} /></div>
               <div className="music__image"><img src={MUSIC.image} alt="" /></div>
               <div className="music__description">
                  <div className="music__name">{MUSIC.tracks[currentSong].name}</div>
                  <div className="music__group"></div>
               </div>
               <div className="player__buttons">
                  <div className="player__prev" onClick={PrevMusic}><FontAwesomeIcon icon={faBackwardStep} /></div>
                  <div className="player__play" onClick={loadMusic}>{isPlaing ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon className='icon' icon={faPlay} />}</div>
                  <div className="player__next" onClick={NextMusic}><FontAwesomeIcon icon={faForwardStep} /></div>
               </div>
               <div className="player__aria">
                  <audio src={MUSIC.tracks[currentSong].src} ref={audioElem} onTimeUpdate={loadData}></audio>
                  <div className="player__current"></div>
                  <div className="player__line" ref={line} onClick={changeTime}>
                     <div className="player__index" style={{ minWidth: `${lineWidth}%` }}></div>
                  </div>
                  <div className="player__time"></div>
               </div>
            </div>
         </div>
         {/* <div className="player-block" ref={player} data-scroll data-scroll-speed="0.5">
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
          */}
      </>
   )
}