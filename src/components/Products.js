import React, { useEffect, useState } from "react"
import axios from "axios"
import { useProducts } from "../hooks"
import { useItems } from "../hooks"

export default props => {
  const { products } = useProducts()
  const { add } = useItems()

  return (
    <div>
      <div className="header">
        <h6>16 Prodct(s) found.</h6>
      </div>
      <div class="sort">
        <h5> Order by</h5>
        <select name="sort">
          <option value="" disabled selected hidden>
            Select
          </option>
          <option value="other">Highest to Lowest</option>
          <option value="space">Lowest to Highest</option>
        </select>
      </div>
      <div className="products">
        {products.map(product => (
          <div key={product.id}>
            <img src={`/assets/${product.sku}_1.jpg`} />
            <p>{product.title}</p>
            <p>${product.price.toFixed(2)}</p>
            <button onClick={e => add(product)} className="addtocart">
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
