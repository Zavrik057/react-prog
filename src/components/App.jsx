
import '../CSS/App.css';
import { useState, useRef , useEffect} from "react";
import Button from './button';
import { source } from '../data/player__data.jsx';
import Player from './player.jsx';
import Members from './members.jsx';
import { groups } from '../data/groups__data.jsx';
import TopTen from './top__songs.jsx';

export default function App() {
  return (
    <>
      <div className="wrapper">
        <Members data={groups['metallica'].currentMembers} />
        <TopTen data={[groups['metallica'].topSongs, groups['metallica'].topAlbums]}></TopTen>
      </div>
    </>
  );
}
