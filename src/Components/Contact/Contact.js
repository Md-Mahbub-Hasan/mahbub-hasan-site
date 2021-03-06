import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import WebIcon from '@material-ui/icons/Web';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import emailjs from 'emailjs-com';

const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_zh7anwq', 'template_0ft7p8s', e.target, 'user_0yuaPtVVcqCviBr9iMWOc')
            .then((result) => {
                alert("Mail send successfully");
            }, (error) => {
                alert(error.text);
            });
    }


    return (
        <>
            <Navbar></Navbar>
            <div className="row d-flex homeBackground contact">
                <div className="col-md-4 offset-md-1" style={{ paddingTop: '10%' }}>
                    <h1 style={{ color: '#fff', fontWeight: 'bold' }}>Get In Touch</h1>
                    <p className="text-white">I'd Love to hear from you . Whether you have a question or just want to say hi, fell free to drop a message. I'll try my best to get back to you!</p>
                    <p className="icon-mt">
                        <a href="https://www.linkedin.com/in/mahbub-hasan-b112b01ba/" target="_blank" rel="noopener noreferrer">
                            <LinkedInIcon className="icon" style={{ fontSize: '30px' }} />
                        </a>
                        <a href="https://mahbub-hasan.netlify.app/" target="_blank" rel="noopener noreferrer">
                            <WebIcon className="icon" style={{ fontSize: '30px' }} />
                        </a>
                        <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" target="_blank" rel="noopener noreferrer">
                            <MailOutlineIcon className="icon" style={{ fontSize: '30px' }} />
                        </a>
                        <a href="https://github.com/Md-Mahbub-Hasan" target="_blank" rel="noopener noreferrer">
                            <GitHubIcon className="icon" style={{ fontSize: '30px' }} />
                        </a>
                    </p>
                </div>
                <div className="col-md-6">
                    <section className="contact my-5 py-5">
                        <div className="">

                            <div className="col-md-9 mx-auto">
                                <form className="contact-form" onSubmit={sendEmail}>
                                    <div className="form-group">
                                        <input type="tex" name="subject" className="form-control" required placeholder="Subject *" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" name="name" className="form-control" required placeholder="Your Name *" />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" name="email" className="form-control" required placeholder="Your Email Address *" />
                                    </div>
                                    <div className="form-group">
                                        <textarea name="message" className="form-control" required id="" cols="30" rows="10" placeholder="Message *"></textarea>
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" value="Send" style={{ width: '40%', backgroundColor: '#111430', marginLeft: '15px' }} className="btn btn-primary btn-lg" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>
                </div>
                <div style={{ margin: '0 auto' }} className="copyRight text-center">
                    <h5 className="text-white">Designed & Built by Mahbub Hasan -*- {(new Date()).getFullYear()}</h5>
                </div>
            </div>
        </>
    );
};

export default Contact;