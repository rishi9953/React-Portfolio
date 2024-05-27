import ContactComponent from './component/contactComponent';
import './contactUs.css'

function ContactUs() {
    return <div className="contactUs" id='cont'>
        <h2>

            Contact
            <span style={{ color: 'yellow' }}>
                Me
            </span>
        </h2>
        <p>Feel free to react out of collaboration or inquiries. I'm always eager to connect and discuss exciting project.</p>
        <ContactComponent></ContactComponent>
    </div>
}

export default ContactUs;