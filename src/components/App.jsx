
import '../CSS/App.css';
// import { useState, useRef, useEffect, useLayoutEffect } from "react";
// import { source } from '../data/player__data.jsx';
// import Player from './player.jsx';
// import Members from './members.jsx';
// import { groups } from '../data/groups__data.jsx';
// import TopTen from './top__songs.jsx';
// import PrevMemb from './prev__memb.jsx';
// import Stage from './stage.jsx';
// import Albums from './albums.jsx';
// import Header from './header.jsx';
import Navbar from './navbar.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AlbumPage from '../pages/album_page.jsx';
import GroupPage from '../pages/group_page.jsx';
// import { gsap } from "gsap"
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { ScrollSmoother } from "gsap/ScrollSmoother";

// gsap.registerPlugin(ScrollSmoother);


export default function App() {

  //   useLayoutEffect(() => {
  //     let ctx = gsap.context(() => {
  //       ScrollSmoother.create({
  //         smooth: 1,
  //         effects: 2,
  //       });

  //     });

  //     return () => ctx.revert();
  //   }, []);

  return (
    <>
      <div className="wrapper">
        <BrowserRouter>
          <Navbar />
  
          <Routes>
            <Route path='/' element={<GroupPage />} />
            <Route path='/' element={<GroupPage />} />
            <Route path='/' element={<GroupPage />} />
            <Route path='/album' element={<AlbumPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
