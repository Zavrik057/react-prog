
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

export default function GroupPage() {
   const { album } = useParams();
   console.log(album);
   return (
      <>
         <HeaderGroup data={groups[`${album}`]}/>
         <Members data={groups[`${album}`].currentMembers} />
         <TopTen data={[groups[`${album}`].topSongs, groups[`${album}`].topAlbums]}></TopTen>
         {/* <PrevMemb data={groups['metallica'].prevMembers} /> */}
         <Stage data={groups[`${album}`].stage} />
         <Albums data={source[`${album}`].albums} group={album}/>
      </>
   )
}