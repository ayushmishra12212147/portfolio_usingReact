import './Contact.css';
function Contact() {
    return (
        <div className="contact">
            <p className='bold'>Contact <span className='green bold'>Details</span></p>
            <div className="form">
                <h2>Contact Form</h2>
                <form action="#" className='row'>
                 
                        <div className="single2">
                            <input type="text" name="name" placeholder=' Full Name' required />
                        </div>
                        <div className="single2">
                            <input type="email" name="email" placeholder=' Email Address' required />
                        </div>
                    
                    <div className="single3">
                        <textarea id="message" placeholder='  Type your message here' required>
                        </textarea>                    </div>
                    <div className="single">
                        <button className="primary-button"><p className='bold back-green'>Send</p></button>
                    </div>
                    <span className='or'>OR</span> 
                </form>
                <div className="last">
                <button ><p className='bold back-green'>Click He to mail</p></button></div>

            </div>
        </div>
    )
}
export default Contact;