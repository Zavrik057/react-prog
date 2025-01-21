
import { useViewport } from 'react-viewport-hooks'
import '../CSS/members__content.css'
import Links from "./links"

export default function MemberContent({ index, data }) {
   const { vw } = useViewport();
   return (
      <>
         <div className="memb__content">
            <div className="memb__shade memb__shade--1"></div>
            <div className="memb__shade memb__shade--2"></div>
            <div className="memb__row" style={{ gridTemplateColumns: index % 2 === 0 ? 'first' : 'second' }}>
               <div className="memb__left" style={ vw > 1210 ? { order: index % 2 === 0 ? 1 : 2 } : {order: 2}}>
                  <div className="memb__name">{data.name}</div>
                  <div className="memb__role">{data.role}</div>
                  <div className="memb__about">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita non molestias animi, voluptate voluptatem ex ratione asperiores aliquid provident Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, quas! </div>
               </div>
               <div className="memb__right" style={ vw > 1210 ? { order: index % 2 === 0 ? 2 : 1 } : {order: 1}}>
                  <div className="memb__date">20</div>
                  <div className="memb__month">05</div>
                  <div className="memb__year">85</div>
               </div>
            </div>
            <Links links={data.links} />
         </div>
      </>
   )
}