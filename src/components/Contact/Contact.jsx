import Socials from '../Socials';
import './Contact.css'
const Contact = () =>{
    return(
        <div id="contact">
            <h1>Let's Get in Touch</h1>
        <form action="">
            <div className='creds'>
            <input type="text" placeholder='Full Name'/>
            <input type="text" placeholder='Mail' />
            </div>
            <textarea name="" id="" placeholder='Enter your message'></textarea>
            <button>Send</button>
        </form>
        <Socials></Socials>
        </div>
    );
}

export default Contact;