
import Members from '../components/members.jsx';
import { groups } from '../data/groups__data.jsx';
import TopTen from '../components/top__songs.jsx';
import PrevMemb from '../components/prev__memb.jsx';
import Stage from '../components/stage.jsx';
import Albums from '../components/albums.jsx';
import Header from '../components/header.jsx';
import { useParams } from 'react-router-dom';
import { source } from '../data/player__data.jsx';
import HeaderGroup from '../components/header_group.jsx';
import { createContext, useContext } from 'react';
import { GlobalState } from '../components/App.jsx';

export default function GroupPage() {

   const { currentGroup, setCurrentGroup } = useContext(GlobalState);
   return (
      <>
         <HeaderGroup data={groups[`${currentGroup}`]} />
         <Members data={groups[`${currentGroup}`].currentMembers} />
         <TopTen data={[groups[`${currentGroup}`].topSongs, groups[`${currentGroup}`].topAlbums]}></TopTen>
         {/* <PrevMemb data={groups['metallica'].prevMembers} /> */}
         <Stage data={groups[`${currentGroup}`].stage} />
         <Albums data={source[`${currentGroup}`].albums} group={currentGroup} />
      </>
   )
}