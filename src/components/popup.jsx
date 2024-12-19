
import '../CSS/popup.css'
function Popup({ children, toggle, handleToggle }) {

   return (
      <>
         {toggle && <div className="popup active">
            <div className="popup__display" onClick={handleToggle}>{children}</div>
         </div>}
      </>
   );
}

export default Popup;