// 1. imports
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"
// 2. action definitions
const TOGGLE_CART = "cart/TOGGLE_CART"
const ADD_ITEM = "cart/ADD_ITEM"
const DEL_ITEM = "cart/DEL_ITEM"
// 3. initial state
const initialState = {
  cart: [],
  isOpen: false
}
// 4. reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return { ...state, cart: [...state.cart, action.payload] }
    case TOGGLE_CART:
      return { ...state, isOpen: !state.isOpen }
    case DEL_ITEM:
      return {
        ...state,
        cart: [...state.cart.filter(cart => cart !== action.payload)]
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
    type: TOGGLE_CART
  }
}

// 6. custom hook
export function useItems() {
  const dispatch = useDispatch()
  const cart = useSelector(appState => appState.cartState.cart)
  const isOpen = useSelector(appState => appState.cartState.isOpen)
  const add = product => dispatch(addItem(product))
  const del = product => dispatch(delItem(product))
  const toggle = () => dispatch(toggleCart())
  //const del = product => dispatch(deleteItem(product))
  useEffect(() => {
    console.log(cart)
  }, [])
  return { cart, add, isOpen, toggle, del }
}

// // 1. imports
// import axios from "axios"
// import { useEffect } from "react"
// import { useSelector, useDispatch } from "react-redux"

// // 2. action definitions
// const GET_ITEM = "cart/GET_ITEM"

// // 3. initial state
// const initialState = {
//   cart: []
// }

// // 4. reducer
// export default (state = initialState, action) => {
//   switch (action.type) {
//     case GET_ITEM:
//       return { ...state, cart: action.payload }
//     default:
//       return state
//   }
// }

// // 5. action creators
// function getItems() {
//   return dispatch => {
//     axios.get("/cart").then(resp => {
//       dispatch({
//         type: GET_ITEM,
//         payload: resp.data
//       })
//     })
//   }
// }

// function addItem(product) {
//   return dispatch => {
//     axios.post("/cart", product).then(resp => {
//       dispatch(getItems())
//     })
//   }
// }

// function deleteItem(product) {
//   return dispatch => {
//     axios.delete("/cart", product).then(resp => {
//       dispatch(getItems())
//     })
//   }
// }

// // 6. custom hook
// export function useItems() {
//   const dispatch = useDispatch()
//   const cart = useSelector(appState => appState.cartState.cart)
//   const add = product => dispatch(addItem(product))
//   const del = product => dispatch(deleteItem(product))

//   useEffect(() => {
//     dispatch(getItems())
//   }, [])

//   return { cart, add, del }
// }
