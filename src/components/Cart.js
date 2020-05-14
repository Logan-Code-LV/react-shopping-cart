import React from "react"
import { Link } from "react-router-dom"
import { userProducts } from "../hooks"
import { useItems } from "../hooks"
import "../styles/Cart.css"
import { FaShoppingCart } from "react-icons/fa"
import { TiShoppingCart } from "react-icons/ti"
import { IoMdClose } from "react-icons/io"
import Collapsible from 'react-collapsible'

export default function(e) {
  const { cart, toggle, status, del, total } = useItems()

  return (
    // <div className= "cart">
    //   <button onClick={e => toggle()}>
    //     <FaShoppingCart />
    //   </button>
    <div>
      <Collapsible trigger="View Your Cart">
      <div className="cartHeading">
        <TiShoppingCart className="cartIcon" />
        <p className="cartTitle">{cart.length} item(s) are in your cart</p>
      </div>
      {cart.map(item => (
        <div key={item.id}>
          <img className="cartimg" src={`/assets/${item.sku}_2.jpg`} />
          <p>{item.title}</p>
          <p>${item.price.toFixed(2)}</p>
          <button class="cancel" onClick={e => del(item)}>X</button>
        </div>
      ))}
      <div className="total">
        <h3> Total: ${total}</h3>
      </div>
      <div className="cartCheckout">
        <button class>
        <Link to='checkout'><p>CHECKOUT</p></Link>
        </button>
      </div>
      </Collapsible>
    </div>
  )
}
