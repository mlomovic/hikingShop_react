import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const FeaturedItems = () => {


    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    let deviceType = 'desktop'

    return (
        <section className="featuredItems container">
            <h2>Featured items</h2>
            <Carousel
                arrows={false}
                swipeable={false}
                draggable={false}
                showDots={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={deviceType !== "mobile" ? true : false}
                autoPlaySpeed={5000}
                keyBoardControl={true}
                customTransition="1000ms ease-in-out"
                transitionDuration={1000}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                deviceType={deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                <div className="item">
                    <a href="single1.html">
                        <img src="img/boots.jpg" alt="" height="300px" />
                        <h3>Boots</h3>
                        <p>$220</p>
                    </a>
                </div>
                <div className="item">
                    <a href="single2.html">
                        <img src="img/gloves.jpg" alt="" height="300px" />
                        <h3>GLoves</h3>
                        <p>$20</p>
                    </a>
                </div>
                <div className="item">
                    <a href="single3.html">
                        <img src="img/jackets.jpg" alt="" height="300px" />
                        <h3>Jackets</h3>
                        <p>$290</p>
                    </a>
                </div>
                <div className="item">
                    <a href="single4.html">
                        <img src="img/pants.jpg" alt="" height="300px" />
                        <h3>Pants</h3>
                        <p>$110</p>
                    </a>
                </div>
                <div className="item">
                    <a href="single5.html">
                        <img src="img/poles.jpg" alt="" height="300px" />
                        <h3>Poles</h3>
                        <p>$50</p>
                    </a>
                </div>
                <div className="item">
                    <a href="single6.html">
                        <img src="img//shirts.jpg" alt="" height="300px" />
                        <h3>Shirts</h3>
                        <p>$80</p>
                    </a>
                </div>
                <div className="item">
                    <a href="single7.html">
                        <img src="img/skirts.jpg" alt="" height="300px" />
                        <h3>Skirts</h3>
                        <p>$90</p>
                    </a>
                </div>
                <div className="item">
                    <a href="single8.html">
                        <img src="img/socks.jpg" alt="" height="300px" />
                        <h3>Socks</h3>
                        <p>$10</p>
                    </a>
                </div>
            </Carousel>

        </section>
    )
}

export default FeaturedItems



{/* <div className="item">
            <a href="single1.html">
                <img src="img/boots.jpg" alt=""/>
                <h3>Boots</h3>
                <p>$220</p>
            </a>
        </div>
        <div className="item">
            <a href="single2.html">
                <img src="img/gloves.jpg" alt=""/>
                <h3>GLoves</h3>
                <p>$20</p>
            </a>
        </div>
        <div className="item">
            <a href="single3.html">
                <img src="img/jackets.jpg" alt=""/>
                <h3>Jackets</h3>
                <p>$290</p>
            </a>
        </div>
        <div className="item">
            <a href="single4.html">
                <img src="img/pants.jpg" alt=""/>
                <h3>Pants</h3>
                <p>$110</p>
            </a>
        </div>
        <div className="item">
            <a href="single5.html">
                <img src="img/poles.jpg" alt=""/>
                <h3>Poles</h3>
                <p>$50</p>
            </a>
        </div>
        <div className="item">
            <a href="single6.html">
                <img src="img//shirts.jpg" alt=""/>
                <h3>Shirts</h3>
                <p>$80</p>
            </a>
        </div>
        <div className="item">
            <a href="single7.html">
                <img src="img/skirts.jpg" alt=""/>
                <h3>Skirts</h3>
                <p>$90</p>
            </a>
        </div>
        <div className="item">
            <a href="single8.html">
                <img src="img/socks.jpg" alt=""/>
                <h3>Socks</h3>
                <p>$10</p>
            </a>
        </div>
    */}