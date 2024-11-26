
import '../CSS/button.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMusic} from '@fortawesome/free-solid-svg-icons'

export default function Button({ children, color }) {
   return (
      <>
         <div className="button">
            <div className="button__icon"><FontAwesomeIcon icon={faMusic} /></div>
            <div className="button__icon"><FontAwesomeIcon icon={faMusic} /></div>
            <div className="button__content"
               style={
                  {
                     background: color ? color : 'whitesmoke',
                  }
               }
            > <p>{children}</p></div>
         </div>
      </>
   );
}