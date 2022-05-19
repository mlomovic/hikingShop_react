import React from 'react'

const FeaturedItems = () => {
  return (
    <section className="featuredItems container">
    <h2>Featured items</h2>
    <article className="owl-carousel owl-theme">
        <div className="item">
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
    </article>

</section>
  )
}

export default FeaturedItems