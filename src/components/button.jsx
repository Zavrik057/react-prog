
import '../CSS/button.css';

export default function Button({ children, color }) {
   return (
      <>
         <div className="button">
            <div className="button__icon"><i class='bx bxs-music'></i></div>
            <div className="button__icon"><i class='bx bxs-music'></i></div>
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