
import '../CSS/groups_list.css'
import { main as data } from "../data/main__data";
import Banner from './banner';
import GroupCard from './group_card';

function GroupList() {
   return (
      <>
         <div className="groups">
            <Banner>groups</Banner>
            <div className="container">
               <div className="groups__display">
                  {data.groups.map((item) => <GroupCard data={item} />)}
               </div>
            </div>
         </div>
      </>
   );
}

export default GroupList;