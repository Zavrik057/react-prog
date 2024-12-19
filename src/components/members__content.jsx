
import '../CSS/members__content.css'
import Links from "./links"

export default function MemberContent({index, data }) {
   return (
      <>
         <div className="memb__content">
            <div className="memb__shade memb__shade--1"></div>
            <div className="memb__shade memb__shade--2"></div>
            <div className="memb__row" style={{gridTemplateColumns: index % 2 === 0 ? '4fr 1fr' : '1fr 4fr'}}>
               <div className="memb__left" style={{order: index % 2 === 0 ? 1 : 2}}>
                  <div className="memb__name">{data.name}</div>
                  <div className="memb__role">
                     <span className='main'>Role :</span>
                     <span>{data.role}</span>
                  </div>
                  <div className="memb__about">
                     <span className='main'>About: </span>
                     <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita non molestias animi, voluptate voluptatem ex ratione asperiores aliquid provident Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, quas!</span>
                  </div>
               </div>
               <div className="memb__right" style={{order: index % 2 === 0 ? 2 : 1}}>
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