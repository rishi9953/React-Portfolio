import { useRef, useState } from 'react';
import './header.css';

function scrollToTarget(id) {
    // eslint-disable-next-line no-restricted-globals
    location.href = '#' + `${id}`;
    console.log('Hello this is service')
}

function Header() {
    const navRef = useRef();

    const showNavBar = () => {
        navRef.current.classList.toggle(
            "responsive_nav"
        );
    }
    const [menuOpen, setMenuOpen] = useState(false);
    return (<>
        <nav>
            <a href="" className='title'>About  <span style={{ color: 'yellow' }}>Me</span></a>
            <div className='menu' onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? "open" : ''}>
                <li onClick={(() => {
                    scrollToTarget('hom');
                })}>
                    <a href='#hom'>HOME</a>
                </li>
                <li onClick={(() => {
                    scrollToTarget('ser');
                })}>
                    <a href='#ser' id='service'>SERVICES</a>
                </li>
                <li onClick={(() => {
                    scrollToTarget('exp');
                })}>
                    <a href='#exp'>EXPERIENCES</a>
                </li>
                <li onClick={(() => {
                    scrollToTarget('cont');
                })}>
                    <a href='#cont'>CONTACT</a>
                </li>
                <li onClick={(() => {
                    scrollToTarget('footer');
                })}>
                    <a href='#footer' id='about'>ABOUT</a>
                </li>




            </ul>
        </nav>

        {/* <div className="header">
            <ul>


                <li onClick={(() => {
                    scrollToTarget('footer');
                })}>
                    <a href='#footer' id='about'>ABOUT</a>
                </li>
                <li onClick={(() => {
                    scrollToTarget('cont');
                })}>
                    <a href='#cont'>CONTACT</a>
                </li>
                <li onClick={(() => {
                    scrollToTarget('exp');
                })}>
                    <a href='#exp'>EXPERIENCES</a>
                </li>
                <li onClick={(() => {
                    scrollToTarget('ser');
                })}>
                    <a href='#ser' id='service'>SERVICES</a>
                </li>
                <li onClick={(() => {
                    scrollToTarget('hom');
                })}>
                    <a href='#hom'>HOME</a>
                </li>
                <li>
                    <FaBars className="nav-btn" ></FaBars>
                </li>
                <li className='about' onClick={(() => {
                    scrollToTarget('hom');
                })}>
                    About
                    <span style={{ color: 'yellow' }}>
                        Me
                    </span>
                </li>
            </ul>
        </div>
     */}
    </>)
}

export default Header