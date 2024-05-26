import ExperienceComponent from './Component/experience-comp';
import './experience.css'

function MyExperience() {
    return <div className="experience" id='exp'>
        <h4>My Experience</h4>
        <div className='paragraph'>
            <p>Specializing in Flutter development, I craft sleek and responsive mobile applications tailored to your unique needs. From UI design to seamless functionality, I deliver top-notch solutions for your digital ventures</p>
        </div>
        <div className='experience-component'>
            <ExperienceComponent ></ExperienceComponent>
            <ExperienceComponent ></ExperienceComponent>
            <ExperienceComponent ></ExperienceComponent>

        </div>
    </div>
}

export default MyExperience;