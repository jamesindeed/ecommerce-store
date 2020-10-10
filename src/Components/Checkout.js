import React from "react";
import { useStateValue } from "../StateProvider";
import "../Style/Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  const showUser = () => {
    if (user) {
      let index = user.email.indexOf("@");
      const name = user.email.substring(0, index);
      return name.charAt(0).toUpperCase() + name.slice(1);
    } else return "Guest";
  };

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
          className="checkout__ad"
        />

        <div>
          <h3 className="checkout__user">{user && `Hello, ${showUser()}`}</h3>
          <h2 className="checkout__title">Your Shopping Basket</h2>

          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              price={item.price}
              image={item.image}
              rating={item.rating}
              count={item.count}
            />
          ))}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
