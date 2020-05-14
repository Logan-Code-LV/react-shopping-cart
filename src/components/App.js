import React from "react"
import "../styles/App.css"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Products from "./Products"
import Cart from "./Cart"
import Receipt from "./Receipt"

export default props => {
  return (
    <Router>
      <div className="container">
        <div className="products">
          <Route exact path="/" component={Products} />
        </div>
        <div className="cart">
          <Route exact path="/" component={Cart} />
        </div>
        <div class="checkout">
        <Route path="/checkout" component={Receipt} />
        </div>
      </div>
    </Router>
  )
}
