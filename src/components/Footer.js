import React from 'react'

const Footer = () => {
  return (
    <footer>
    <article className="container">
        <h3>
            <a className="logo" href="index.html"><i className="fas fa-hiking"></i>Hiking shop</a>
        </h3>
        <nav>
            <ul>
                <li>
                    <a href="index.html">Home</a>
                </li>
                <li>
                    <a href="products.html">Products</a>
                </li>
                <li>
                    <a href="about.html">About us</a>
                </li>
                <li>
                    <a href="contact.html">Contact us</a>
                </li>
                <li>
                    <a href="contact.html">Cart</a>
                </li>
                <li>
                    <a href="contact.html">Admin</a>
                </li>
            </ul>
        </nav>
        <div className="icons">
            <span><a href="/"><i className="fab fa-facebook-square"></i></a></span>
            <span><a href="/"><i className="fab fa-instagram"></i></a></span>
            <span><a href="/"><i className="fab fa-twitter"></i></a></span>
            <span><a href="/"><i className="fab fa-pinterest"></i></a></span>
        </div>
    </article>
    <article>
        <p>&copy; Hiking shop 2021.</p>
    </article>
</footer>
  )
}

export default Footer