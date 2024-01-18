import React from 'react'
import { Carousel } from 'react-bootstrap'
import food from '../Components/food2.avif'
import food1 from '../Components/food4.avif'
import food2 from '../Components/food.avif'

const Slider = () => {
    return (
        <div id="Slider">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 "
                        style={{ height: 600 }}
                        src={food1}
                        alt="First-slide"
                    />
                    <Carousel.Caption>
                        <h3>Food is my love language.</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        style={{ height: 600 }}
                        src={food2}
                        alt="First-slide"
                    />
                    <Carousel.Caption>
                        <h3>Food is not just fuel; it's an experience.</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        style={{ height: 600 }}
                        src={food}
                        alt="First-slide"
                    />
                    <Carousel.Caption>
                        <h3>Tasting the world, one dish at a time.</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Slider
