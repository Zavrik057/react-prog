
import '../CSS/banner.css'
import { useRef, useLayoutEffect } from 'react';


function Banner({ children }) {

   return (
      <>
         <div className="banner__banner">
            <div className="banner__text">{children}</div>
         </div>
      </>
   );
}

export default Banner;