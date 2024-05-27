import './contactComponent.css'
function ContactComponent() {
    return <div className='contactComponent'>
        <div className='myaddress'>

            <p>
                <span style={{ color: 'yellow' }}>
                    Address__
                </span>
                c-120-A Majlis Park Delhi 110033</p>
            <p>
                <span style={{ color: 'yellow' }}>
                    Phone__
                </span>
                +919350413656</p>
            <p>
                <span style={{ color: 'yellow' }}>
                    Email__
                </span>rk5680179@gmail.com</p>
        </div>
        <div className='textfields'>
            <input type="text" placeholder='Name' id='name' />
            <input type="text" placeholder='Message' id='message' />
            <button className='submit-Buton'>Submit</button>
        </div>

    </div>
}

export default ContactComponent;