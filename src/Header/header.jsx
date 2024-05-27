import './header.css';

function scrollToTarget(id) {
    // eslint-disable-next-line no-restricted-globals
    location.href = '#' + `${id}`;
    console.log('Hello this is service')
}

function Header() {
    return (<>
        <div className="header">
            <ul>
                <li onClick={(() => {
                    scrollToTarget('footer');
                })}>
                    <a id='about'>ABOUT</a>
                </li>
                <li onClick={(() => {
                    scrollToTarget('cont');
                })}>
                    <a>CONTACT</a>
                </li>
                <li onClick={(() => {
                    scrollToTarget('exp');
                })}>
                    <a>EXPERIENCES</a>
                </li>
                <li onClick={(() => {
                    scrollToTarget('ser');
                })}>
                    <a id='service'>SERVICES</a>
                </li>
                <li onClick={(() => {
                    scrollToTarget('hom');
                })}>
                    <a>HOME</a>
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
    </>)
}

export default Header