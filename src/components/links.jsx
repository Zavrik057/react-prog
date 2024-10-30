
import '../CSS/links.css'
export default function Links({ links }) {

   return (
      <>
         <div className="links">
            <a className={links.instagram ? 'link' : 'link link--none'} src={links.instagram}><i class='bx bxl-instagram-alt'></i></a>
            <a className={links.facebook ? 'link' : 'link link--none'} src={links.facebook}> <i class='bx bxl-facebook-circle' ></i></a>
            <a className={links.twitter ? 'link' : 'link link--none'} src={links.twitter}><i class='bx bxl-twitter'></i></a>
            <a className={links.youtube ? 'link link--mod' : 'link link--mod link--none'} src={links.youtube}><i class='bx bxl-youtube' ></i></a>
            <a className={links.tiktok ? 'link' : 'link link--none'} src={links.tiktok}><i class='bx bxl-tiktok' ></i></a>
         </div >
      </>
   );
}