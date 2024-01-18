import React from 'react';
import login from '../Components/loginfront.jpg';
import login2 from '../Components/login2.jpg';
import quality from '../Components/quality food.png';

const AboutUs = () => {
    return (
        <div id="aboutus" className="container mt-5 border p-2">
            <div className="row">
                <div className="col-md-3 mt-3">
                    <img
                        src={login}
                        className="img-fluid"
                        style={{ height: '250px', padding: '10px' }}
                        alt="Image 1"
                    />
                </div>
                <div className="col-md-6">
                    <h2 style={{ color: 'red', fontFamily: 'bold' }}>About Us</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac semper lectus, eu
                        consectetur ex. Mauris condimentum dolor id tortor efficitur, nec bibendum elit
                        feugiat. Vivamus auctor arcu a urna tristique venenatis.
                    </p>
                    <p>
                        Nullam vitae massa vel elit varius laoreet vel eget libero. Morbi bibendum justo ac
                        augue bibendum, ac sagittis nunc aliquam. Quisque congue, quam vel rhoncus congue, velit
                        sapien varius felis, sit amet fermentum urna dui vel libero.
                    </p>
                    <h2 style={{ color: 'blue' }}>
                        15 <img src={quality} alt="quality" style={{ width: '50px' }} /> Years
                        Experience
                    </h2>
                </div>
                <div className="col-md-3 mt-3">
                    <img
                        src={login2}
                        className="img-fluid mt-3"
                        style={{ height: '250px', padding: '10px' }}
                        alt="Image 2"
                    />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
