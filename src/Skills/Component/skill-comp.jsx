import './skill-comp.css'
import dart from './skills/dart.png'
import flutter from './skills/flutter.png'
import firebase from './skills/firebase.png'
import html from './skills/html.png'
import css from './skills/css.png'
import myJavascript from './skills/javscript.png'
import mynode from './skills/node.png'


function SkillComponent() {
    let images = [
        dart, flutter, firebase, html, css, myJavascript, mynode
    ];

    return <div className='Skill-comp'>
        <div className='images'>
            {images.map((e) => {
                return <img src={e} alt="" className='image1' />
            })}
        </div>

    </div>
}

export default SkillComponent;