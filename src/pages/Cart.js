import React, { useContext } from 'react';
import CartContext from '../contexts/CartContext';

const Cart = () => {

  const { cart, setCart } = useContext(CartContext);

  // Brisanje svega iz cart-a
  const clearCart = () => {
    setCart([]);
  }

  // Brisanje jedne stavke iz carta-a
  const removeItem = (idx) => {
    let tempCart = [...cart];
    tempCart.splice(idx, 1);
    setCart([...tempCart]);
  }

  // Racunjanje sume artikala u cart-u (kolicima za kupovinu)
  let total = cart.reduce((acc, curVal) => {
    return acc + curVal.qty * curVal.price;
  }, 0);
  

  return (
    <div class="container">
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Unit Price</th>
            <th scope="col">Qty.</th>
            <th scope="col">Price</th>
            <th scope="col">Remove</th>
          </tr>
        </thead>
        <tbody id="cartTable">
          {cart.map((item, idx) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td><img src={`http://localhost:3000/${item.img}`} height="30px" /></td>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <td>{item.qty}</td>
                <td>${item.price * item.qty}</td>
                <td><button class="btn btn-danger" onClick={() => removeItem(idx)}>X</button></td>
              </tr>
            )
          })
          }
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>total:</td>
            <td>${total}</td>
          </tr>
        </tbody>
      </table>
      <button class="btn btn-danger" onClick={() => clearCart()}>Clear Cart</button>
    </div >
  )
}

export default Cart;