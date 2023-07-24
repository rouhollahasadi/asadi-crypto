import React from 'react';
import ContactImg from '../assets/images/contact.png';


const ContactUsPage = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 bg-info p-2 rounded">
                    <h3>Contact Us</h3>
                </div>
            </div>
            <div className="row align-items-center mt-4">
                <div className="col-md-7 ">
                    <div>
                        <h3 className="text-primary">How to Contact Us</h3>
                        <h5>+98 9377409560</h5>
                        <h5>rouhollahasadi83[at]gmail.com</h5>
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Example textarea</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>

                    <button className="btn btn-outline-info ms-2">
                        Send Message
                    </button>
                </div>
                <div className="col-md-5 text-center">
                    <img src={ContactImg} alt="Contact-image" className="img-fluid contact-img" />
                </div>
            </div>
        </div>
    );
};

export default ContactUsPage;