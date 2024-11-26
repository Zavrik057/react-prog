
import '../CSS/groups_list.css'
import { main as data } from "../data/main__data";
import GroupCard from './group_card';

function GroupList() {
   return (
      <>
         <div className="groups">
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