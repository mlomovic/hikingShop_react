import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProductsContext from '../contexts/ProductsContext';
import CartContext from '../contexts/CartContext';

const Single = () => {

    const params = useParams();
    const navigate = useNavigate();

    const { products, setProducts } = useContext(ProductsContext);
    const { cart, setCart } = useContext(CartContext);

    // Filtriranje jednog proizvoda za zeljenim ID-jem
    let product = products.filter(prod => {
        if (prod.id == params.id) {
            return prod;
        }
    });

    // Kreiranje option menija u <select> elementu
    let option = [];
    for (let i = 1; i <= product[0].qty; i++) {
        option.push(<option key={i} value={`${i}`}>{i}</option>);
    }


    //Kreiranje kategorija za prikaz
    let categElem = [];
    let catTemp = product[0].category.trim().split(',');

    catTemp.forEach((element, idx) => {
        if (catTemp.length != idx + 1) {
            categElem.push(<a key={idx} href=".">{element.trim()}, </a>)
        } else {
            categElem.push(<a key={idx} href=".">{element.trim()}</a>)
        }
    });


    const addToCart = (event) => {
        event.preventDefault();

        let newCartItem = {
            id: params.id,
            name: product[0].name,
            price: product[0].price,
            img: product[0].img,
            desc: product[0].desc,
            category: product[0].category,
            qty: event.target.selectQty.value
        };

        setCart(cart => [...cart, newCartItem]);
        navigate('/products')
    }


    return (
        <section className="single container">
            <h2>Single product</h2>

            <article>
                <div>
                    <img src={product[0].img} alt="BootsPhoto" />
                </div>
                <div>
                    <h3>{product[0].name}</h3>
                    <div className="price">${product[0].price}</div>
                    <p>{product[0].desc}</p>
                    <form onSubmit={addToCart}>
                        <label>Quantity</label>
                        <select name='selectQty'>
                            {option}
                            {/* <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option> */}
                        </select>
                        <button type='submit'>Order now</button>
                    </form>
                    <hr />
                    <p>Category:
                        {categElem}
                        {/* <a href="">Men</a>,
                        <a href="">Boots</a> */}
                    </p>
                    <hr />
                    <span>Share:</span>
                    <span><a href=""><i className="fab fa-facebook-square"></i></a></span>
                    <span><a href=""><i className="fab fa-instagram"></i></a></span>
                    <span><a href=""><i className="fab fa-twitter"></i></a></span>
                    <span><a href=""><i className="fab fa-pinterest"></i></a></span>
                </div>
            </article>
        </section>
    )
}

export default Single;