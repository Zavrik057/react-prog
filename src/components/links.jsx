
import '../CSS/links.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons';
export default function Links({ links }) {

   return (
      <>
         <div className="links">
            <a className={links.instagram ? 'link' : 'link link--none'} src={links.instagram}><FontAwesomeIcon className='link__icon instagram' icon={faInstagram} /></a>
            <a className={links.facebook ? 'link link--mod' : 'link link--mod link--none'} src={links.facebook}><FontAwesomeIcon className='link__icon facebook' icon={faFacebook} /></a>
            <a className={links.twitter ? 'link' : 'link link--none'} src={links.twitter}><FontAwesomeIcon className='link__icon twiter' icon={faTwitter} /></a>
            <a className={links.youtube ? 'link link--mod' : 'link link--mod link--none'} src={links.youtube}><FontAwesomeIcon className='link__icon youtube'  icon={faYoutube} /></a>
            <a className={links.tiktok ? 'link' : 'link link--none'} src={links.tiktok}><FontAwesomeIcon className='link__icon tiktok' icon={faTiktok} /></a>
         </div >
      </>
   );
}