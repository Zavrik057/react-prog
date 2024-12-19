

import '../CSS/years.css'
import Slider from "./slider";
import { main } from "../data/main__data";
import Banner from './banner';

function Years() {
   return ( 
      <>
      <div className="years">
         <Banner>years</Banner>
         <div className="container">
            <div className="years__display">
               <Slider/>
            </div>
         </div>
      </div>
      </>
    );
}

export default Years;