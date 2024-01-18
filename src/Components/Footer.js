import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div id="Contactus" className="container-fluid mb-5" style={{ backgroundColor: '#3652AD' }}>
                <div className="row">
                    <div className="col-md-3">
                        <h3>Company --</h3>
                        <ul style={{ listStyleType: 'none', padding: 0 }}>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Contact us</a></li>
                            <li><a href="#">Restaurant</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h3>Contact--</h3>
                        <p><i className="fas fa-map-marker-alt"></i> 123 Main Street, Salem</p>
                        <p><i className="fas fa-envelope"></i> info@example.com</p>
                        <p><i className="fas fa-phone"></i> +91 7904144268</p>
                    </div>
                    <div className="col-md-3">
                        <h3>Follow Us--</h3>
                        <div className="social-icons">
                            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
                            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                        </div>

                    </div>
                    <div className="col-md-3">
                        <h3>Opening --</h3>
                        <p>Monday - Saturday</p>
                        <p>9AM - 11PM</p>
                        <p>Sunday</p>
                        <p>10AM - 11PM</p>
                    </div>
                </div>
            </div>
        </footer >
    );
};

export default Footer;
