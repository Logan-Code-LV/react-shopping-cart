import React from "react"
import { userProducts } from "../hooks"
import { useItems } from "../hooks"
import "../styles/Cart.css"
import { FaShoppingCart } from "react-icons/fa"

export default function(e) {
  const { cart, toggle, isOpen, del, total } = useItems()

  return (
    <div className="cart">
      {isOpen ? <h1>OPEN</h1> : <h1>CLOSED</h1>}
      <button onClick={e => toggle()}>
        <FaShoppingCart />
      </button>
      {cart.map(item => (
        <div key={item.id}>
          <img className="cartimg" src={`/assets/${item.sku}_2.jpg`} />
          <p>{item.title}</p>
          <p>${item.price.toFixed(2)}</p>
          <button onClick={e => del(item)}>X</button>
        </div>
      ))}
      <div className="total">
        <h3> Total: ${total}</h3>
      </div>
    </div>
  )
}
