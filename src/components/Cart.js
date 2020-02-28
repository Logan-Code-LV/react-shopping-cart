import React from "react"
import { userProducts } from "../hooks"
import { useItems } from "../hooks"
import "../styles/Cart.css"

export default function() {
  const { cart } = useItems()

  return (
    <div className="cart">
      {cart.map(item => (
        <div key={item.id}>
          <img className="cartimg" src={`/assets/${item.sku}_2.jpg`} />
          <p>{item.title}</p>
          <p>${item.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  )
}
