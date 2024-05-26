import './aboutMe.css';
import image from './me.jpg'
function AboutMe() {
    return (<>
        <div className="body" id='hom'>
            <div className="aboutMe">
                <h4>
                    Hello,Welcome
                </h4>
                <h1>
                    I am Rishabh Kumar
                </h1>
                <p>
                    I am a meticulous problem-solver, crafting elegant code with a passion for innovation. Collaborative and adaptable, you thrive on learning and excel in dynamic environments.
                </p>
                <div className='contact-button'>
                    <button>Contact Us</button>
                </div>

            </div>
            <div className='image'>
                <img src={image} alt="" />
            </div>
        </div>
    </>);
}
export default AboutMe;