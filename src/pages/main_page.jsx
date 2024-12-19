
import { main } from '../data/main__data.jsx';
import Header from '../components/header.jsx';
import GroupList from '../components/groups_list.jsx';
import Years from '../components/years.jsx';
import TopTen from '../components/top__songs.jsx';

function MainPage() {
   return (
      <>
         <Header />
         <GroupList />
         <TopTen data={[main.topSongs, main.topAlbums]} />
         <Years />
      </>
   );
}

export default MainPage;