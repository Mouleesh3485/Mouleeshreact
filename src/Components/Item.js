import React from 'react';
import resipe from '../Components/item.webp';
import resipe1 from '../Components/item1.webp';
import resipe2 from '../Components/item2.jpg';
import resipe3 from '../Components/item4.jpg';
import resipe4 from '../Components/item6.jpg';
import resipe5 from '../Components/item7.jpg';

const TodaysSpecial = () => {
    return (
        <div id="Items" className="container mt-5">
            <h3 style={{ textAlign: 'center', fontWeight: 'bold' }}>Todays Special</h3>
            <div className="row mt-1">
                <div className="col-md-4 border mt-3">
                    <div className="card">
                        <img src={resipe} className="card-img-top" alt="item1" style={{ height: '200px' }} />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Sweats</h5>
                        <p className="card-text">Sweats are delicious !!</p>
                    </div>
                </div>
                <div className="col-md-4 border mt-3">
                    <div className="card">
                        <img src={resipe1} className="card-img-top" alt="item1" style={{ height: '200px' }} />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Chilli Chicken</h5>
                        <p className="card-text">
                            Chilli chicken is a sweet, spicy & slightly sour crispy appetizer made with chicken, bell
                            peppers, garlic, chilli sauce & soya sauce.
                        </p>
                    </div>
                </div>
                <div className="col-md-4 border mt-3">
                    <div className="card">
                        <img src={resipe2} className="card-img-top" alt="item1" style={{ height: '200px' }} />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Chicken Curry</h5>
                        <p className="card-text">
                            A dish composed with a sauce or gravy seasoned with a mixture of ground spices that is
                            thought to have originated in India
                        </p>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-4 border mt-3">
                    <div className="card">
                        <img src={resipe5} className="card-img-top" alt="item1" style={{ height: '200px' }} />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">BBQ Grill</h5>
                        <p className="card-text">BBQing your dinner is a great way to bump up the health value of your meal.</p>
                    </div>
                </div>
                <div className="col-md-4 border mt-3">
                    <div className="card">
                        <img src={resipe4} className="card-img-top" alt="item1" style={{ height: '200px' }} />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Veg Grill Sandwich</h5>
                        <p className="card-text">
                            Made with bread, butter, vegetables, chutney, cheese and ground spices, this is a super
                            delicious and easy to make sandwich.
                        </p>
                    </div>
                </div>
                <div className="col-md-4 border mt-3">
                    <div className="card">
                        <img src={resipe3} className="card-img-top" alt="item1" style={{ height: '200px' }} />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Veg Manchurian</h5>
                        <p className="card-text">
                            Veg Manchurian is a tasty Indo Chinese dish of fried veggie balls in a spicy, sweet and
                            tangy sauce.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodaysSpecial;
