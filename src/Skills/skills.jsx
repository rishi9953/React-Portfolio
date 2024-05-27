// import SkillComponent from "./Component/skill-comp";
import SkillComponent from './Component/skill-comp';
import './skills.css'

function MySkills() {
    return <div className="MySkills-comp" id='skill'>
        <h4>My
            <span style={{ color: 'yellow' }}>

                Experience
            </span>
        </h4>
        <div className='paragraph'>
            <p>Specializing in Flutter development, I craft sleek and responsive mobile applications tailored to your unique needs. From UI design to seamless functionality, I deliver top-notch solutions for your digital ventures</p>
        </div>
        <div className='skill-comp'>
            <SkillComponent></SkillComponent>
        </div>
    </div>

}

export default MySkills;