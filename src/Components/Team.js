import React from 'react';
import chef from '../Components/chef.webp';

const TeamMembers = () => {
    return (
        <div id="Members" className="container mt-5" >
            <h2 className="text" style={{ textAlign: 'center' }}>Our Team Members</h2>
            <div className="row mt-5">
                {[1, 2, 3, 4].map((index) => (
                    <div key={index} className="col-md-3" style={{ padding: "10px" }}>
                        <div className="card">
                            <img src={chef} className="card-img-top" alt={`chef${index}`} style={{ borderRadius: '60%' }} />
                        </div>
                        <div className="card-body" style={{ padding: "10px" }}>
                            <h5 className="card-title">Mouleesh</h5>
                            <p className="card-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac semper lectus, eu
                                consectetur ex. Mauris condimentum dolor id tortor efficitur, nec bibendum elit feugiat.
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeamMembers;
