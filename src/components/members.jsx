
import MemberCard from "./member__card";
import MemberContent from "./members__content";
import '../CSS/members.css'

export default function Members({ data }) {
   return (
      <>
         <div className="members">
            <div className="container">
               <div className="members__display">
                  {data.map((item, index) => {
                     return (
                        <div className="members__row" 
                        style={{gridTemplateColumns: index % 2 === 0 ? ' 40% 1fr' : '1fr 40%'}}
                        >
                           {index % 2 === 0 && <>
                              <div className="members__display-image"><MemberCard image={item.image} /></div>
                              <div className="members__display-item"><MemberContent index={index}  data={item} /></div>
                           </>}
                           {index % 2 !== 0 && <>
                              <div className="members__display-item"><MemberContent index={index} data={item} /></div>
                              <div className="members__display-image"><MemberCard image={item.image} /></div>
                           </>}
                        </div>
                     );
                  })}
               </div>
            </div>
         </div>
      </>
   );
}