import './footer.css'
import { ReactComponent as Myfacebook } from './social/facebook.svg';
import { ReactComponent as MyLinkedin } from './social/linkdin.svg';
import { ReactComponent as Myinsta } from './social/insta.svg';
import { ReactComponent as Myyoutube } from './social/youtube.svg'
import { ReactComponent as Mygithub } from './social/github.svg';
import FooterComponent from './component/footerComponent';
function MyFooter() {
    return <div className='social' id='footer'>
        <h4>AboutMe.</h4>
        <p>I am a meticulous problem-solver,crafting elegant code with a passion for innovation</p>
        <p>Collaborative and adaptable, you thrive on learning and excel in dynamic enviourments</p>
        <div className='social-images'>
            <FooterComponent Myicon={Myfacebook}></FooterComponent>
            <FooterComponent Myicon={MyLinkedin}></FooterComponent>
            <FooterComponent Myicon={Myinsta}></FooterComponent>
            <FooterComponent Myicon={Myyoutube}></FooterComponent>
            <FooterComponent Myicon={Mygithub}></FooterComponent>
            {/* {social.map((myIcon1) => {
                return <myIcon1></myIcon1>
            })} */}
        </div>
    </div>
}

export default MyFooter