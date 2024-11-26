import React from 'react';
import { useCart } from './CartStore';

export default function ShoppingCart() {

  <div className="container mt-5">
    <h1>Your Shopping Cart</h1>
    <p>This is where we'll display your shopping Cart.</p>
  </div>


  //  const ShoppingCart = () => {
  //   const { cart, getCartTotal, modifyQuantity } = useCart();

  // const { getCart, getCartTotal, modifyQuantity, deleteCartItem } = useCart();
  // const cart = getCart();

  const { cart, getCartTotal, modifyQuantity, deleteFromCart } = useCart();


  return <>

    <div className="container mt-5">
      <h1>Your Shopping Cart</h1>
      <p>This is where we'll display your shopping Cart.</p>
    </div>

    <div className="container mt-4">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (<p>Your cart is empty.</p>) : (
        <>
          <ul className="list-group">
            {cart.map((item) => (
              <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <h5>{item.productName}</h5>
                  <img src={item.imageUrl} alt={item.productName} className="cart-image" />
                  <div className="d-flex align-items-center mt-2">
                    <button className="btn btn-sm btn-secondary me-2" onClick={() => modifyQuantity(item.product_id, item.quantity - 1)}>-</button>
                    <p className="mb-0">Quantity: {item.quantity}</p>
                    <button className="btn btn-sm btn-secondary ms-2" onClick={() => modifyQuantity(item.product_id, item.quantity + 1)}>+</button>
                    <button className="btn btn-sm btn-danger ms-2" onClick={() => deleteFromCart(item.product_id)}>Delete</button>
                  </div>
                </div>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
        </>
      )}

      <div className="mt-3 text-end">
        <h4>Total: ${getCartTotal()}</h4>
      </div>
    </div>
  </>
}


