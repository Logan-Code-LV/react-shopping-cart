import React from "react"
import { useItems } from "../hooks"
import "../styles/Cart.css"

export default function(e) {
  const { cart, toggle, isOpen, del, total, checkout } = useItems()

  return (
    <div>
      <h4>Thank you for shopping with us</h4>
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
