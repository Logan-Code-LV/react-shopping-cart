// 1. imports
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"

// 2. action definitions
const ADD_ITEM = "cart/ADD_ITEM"
const DEL_ITEM = "cart/DEL_ITEM"
const GET_STATUS = 'cart/GET_STATUS'

// 3. initial state
const initialState = {
  cart: [],
  open: false
}
// 4. reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return { ...state, cart: [...state.cart, action.payload] }
    case GET_STATUS:
      return { ...state, open: !state.open }
    case DEL_ITEM:
      return {
        ...state,
        cart: [...state.cart.filter(product => product !== action.payload)]
      }
    default:
      return state
  }
}
// 5. action creators

function addItem(product) {
  return dispatch => {
    dispatch({
      type: ADD_ITEM,
      payload: product
    })
  }
}

function delItem(product) {
  return dispatch => {
    dispatch({
      type: DEL_ITEM,
      payload: product
    })
  }
}

function toggleCart() {
  return {
    type: GET_STATUS
  }
}

// 6. custom hook
export function useItems() {
  const dispatch = useDispatch()
  const cart = useSelector(appState => appState.cartState.cart)
  const status = useSelector(appState => appState.cartState.open)
  const add = product => dispatch(addItem(product))
  const del = product => dispatch(delItem(product))
  const toggle = () => dispatch(toggleCart())
  // const total = cart.reduce((a, b) => a + b.price, 0).toFixed(2)
  const [total, setTotal] = useState('')

  useEffect(() => {
    const amount = cart.reduce((a, b) => a + b.price, 0)

    setTotal(amount.toFixed(2))
  }, [cart])
  // useEffect(() => {
  //   console.log(cart)
  // }, [])
  return { cart, add, status, toggle, del, total }
}
