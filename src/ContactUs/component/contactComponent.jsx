import './contactComponent.css'
function ContactComponent() {
    return <div className='contactComponent'>
        <div className='myaddress'>
            <p>Address_c-120-A Majlis Park Delhi 110033</p>
            <p>Phone_+919350413656</p>
            <p>Email_rk5680179@gmail.com</p>
        </div>
        <div className='message'>
            <input type="text" />
            <input type="text" />
            <button>Submit</button>
        </div>

    </div>
}

export default ContactComponent;