import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import "../styles/cart.css";

const Cart = () => {
  const { cartItems, subTotal, tax, delivery_charges, total } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();

  const increment = (id) => {
    dispatch({
      type: "addToCart",
      payLoad: { id },
    });
    dispatch({ type: "calculatePrice" });
  };

  const decrement = (id) => {
    dispatch({
      type: "decrement",
      payLoad: id,
    });
    dispatch({ type: "calculatePrice" });
  };

  return (
    <div className="container-fluid cart_box">
      <main className="cart_main row ">
        {cartItems.length > 0 ? (
          cartItems.map((i) => (
            <CartItem
              
              id={i.id}
              image={i.image}
              name={i.name}
              price={i.price}
              quantity={i.quantity}
              decrement={decrement}
              increment={increment}
              key={i.id}
            />
          
          ))
        ) : (
          <h1>no items yet</h1>
        )}
      </main>
      <aside className="price_details">
        <span className="details_box">
          <div className="note_box">
            <h6 className="note">NOTE:</h6>
            <p className="note_text">
              delivery charges are excluded on order above Rs:2000/-
              <br />
              GST: which is 18% of order price included
            </p>
          </div>

          <div>
            <h1 className="details">price details</h1>
            <p className="price">sub-total : ${subTotal} </p>
            <p className="price">GST: ${tax} </p>
            <p className="price">delivey charges : ${delivery_charges} </p>
            <p id="total" className="price">
              TOTAL: ${total}
            </p>
            <button className="btn text-dark border-dark payment_btn">
              Place order
            </button>
          </div>
        </span>
      </aside>
    </div>
  );
};
const CartItem = ({image, name, price, quantity, decrement, increment,id }) => {
  return (
    <main className="cart_main row ">
       <div className="col-12 cart_product ">
        <img className="cart_img" src={image}  alt={name}/>
        <div className="cart_product_text">
          <p>{name}</p>
          <p> {price}</p>
        </div>
        <div className="product_qty">
          <button className="qty_btn" onclick={decrement(id)}>
            -
          </button>
          <p className="product_qty">{quantity}</p>
          <button className="qty_btn" onclick={increment(id)}>
            +
          </button>
        </div>
        <AiFillDelete className="delete" />
      </div>
    </main>
    
  );
};

export default Cart;
