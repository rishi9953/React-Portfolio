import './header.css';

function Header() {
    return (<>
        <div className="header">
            <ul>
                <li>
                    <a id='service'>SERVICES</a>
                </li>
                <li>
                    <a>EXPERIENCES</a>
                </li>
                <li>
                    <a>CONTACT</a>
                </li>
                <li>
                    <a>ABOUT</a>
                </li>
                <li>
                    <a>HOME</a>
                </li>
                <li className='about'>
                    <a>AboutMe.</a>
                </li>
            </ul>
        </div>
    </>)
}

export default Header