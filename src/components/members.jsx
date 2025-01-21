
import MemberCard from "./member__card";
import MemberContent from "./members__content";
import '../CSS/members.css'
import Banner from "./banner";
import { useVelocity } from "framer-motion";
import { useViewport } from "react-viewport-hooks";

export default function Members({ data }) {
   const { vw } = useViewport();
   return (
      <>
         <div className="members">
            <Banner>members</Banner>
            <div className="container">
               <div className="members__display">
                  {data.map((item, index) => {
                     return (
                        <div className="members__row"
                           style={vw > 770 ? { gridTemplateColumns: index % 2 === 0 ? ' 40% 1fr' : '1fr 40%' } : { gridTemplateColumns: '1fr' }}
                           key={index}
                        >
                           {(index % 2 === 0 && vw > 770) && <>
                              <div className="members__display-image"><MemberCard image={item.image} /></div>
                              <div className="members__display-item"><MemberContent index={index} data={item} /></div>
                           </>}
                           {(index % 2 !== 0 && vw > 770) && <>
                              <div className="members__display-item"><MemberContent index={index} data={item} /></div>
                              <div className="members__display-image"><MemberCard image={item.image} /></div>
                           </>}
                           {vw <= 770 && <>
                              <div className="members__display-image"><MemberCard image={item.image} /></div>
                              <div className="members__display-item"><MemberContent index={index} data={item} /></div>
                           </>}
                        </div>
                     );
                  })}
               </div>
            </div>
         </div >
      </>
   );
}