
import Members from '../components/members.jsx';
import { groups } from '../data/groups__data.jsx';
import TopTen from '../components/top__songs.jsx';
import PrevMemb from '../components/prev__memb.jsx';
import Stage from '../components/stage.jsx';
import Albums from '../components/albums.jsx';
import Header from '../components/header.jsx';
import GroupList from '../components/groups_list.jsx';
import { main } from '../data/main__data.jsx';

export default function GroupPage() {
   return (
      <>
         <Header />
         <GroupList />
         <TopTen data={[main.topSongs, main.topAlbums]}/>
         <Members data={groups['metallica'].currentMembers} />
         <TopTen data={[groups['metallica'].topSongs, groups['metallica'].topAlbums]}></TopTen>
         {/* <PrevMemb data={groups['metallica'].prevMembers} /> */}
         <Stage data={groups['metallica'].stage} />
         <Albums />
      </>
   )
}