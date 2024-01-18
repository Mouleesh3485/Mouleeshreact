import React from 'react';
import profile from '../Components/profile.png';
import tracking from '../Components/tracking.png';
import customercare from '../Components/customercare.png';
import quality from '../Components/quality food.png';


const Service = () => {

    const cardStyle = {
       
        transition: 'background-color 0.3s',
    };


    return (
        <div id="Service" className="container mt-4">
            <div className="row">
                <div className="col-md-3">
                    <div className="card" style={cardStyle} >
                        <img
                            src={profile}
                            className="card-img-top"
                            alt="Master Chef Logo"
                            style={{ height: '40px', width: '40px', margin: '20px' }}
                        />
                        <div className="card-body">
                            <h5 className="card-title" style={{ textAlign: "left" }}>Master Chef</h5>
                            <p className="card-text" style={{ textAlign: "left" }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac semper lectus, eu
                                consectetur ex. Mauris condimentum dolor id tortor efficitur, nec bibendum elit
                                feugiat.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <img
                            src={quality}
                            className="card-img-top"
                            alt="Quality Food Logo"
                            style={{ height: '40px', width: '40px', margin: '20px' }}
                        />
                        <div className="card-body">
                            <h5 className="card-title" style={{ textAlign: "left" }}>Quality Food</h5>
                            <p className="card-text" style={{ textAlign: "left" }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac semper lectus, eu
                                consectetur ex. Mauris condimentum dolor id tortor efficitur, nec bibendum elit
                                feugiat.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <img
                            src={tracking}
                            className="card-img-top"
                            alt="Online Order Logo"
                            style={{ height: '40px', width: '40px', margin: '20px' }}
                        />
                        <div className="card-body">
                            <h5 className="card-title" style={{ textAlign: "left" }}>Online Order</h5>
                            <p className="card-text" style={{ textAlign: "left" }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac semper lectus, eu
                                consectetur ex. Mauris condimentum dolor id tortor efficitur, nec bibendum elit
                                feugiat.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <img
                            src={customercare}
                            className="card-img-top"
                            alt="Customer Care Logo"
                            style={{ height: '40px', width: '40px', margin: '20px' }}
                        />
                        <div className="card-body" style={{ textAlign: "left" }}>
                            <h5 className="card-title" style={{ textAlign: "left" }}>Customer Care</h5>
                            <p className="card-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac semper lectus, eu
                                consectetur ex. Mauris condimentum dolor id tortor efficitur, nec bibendum elit
                                feugiat.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;
