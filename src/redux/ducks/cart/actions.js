// 1. imports
import axios from "axios"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

// 2. action definitions
const GET_ITEM = "cart/GET_ITEM"

// 3. initial state
const initialState = {
  cart: []
}

// 4. reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEM:
      return { ...state, cart: action.payload }
    default:
      return state
  }
}

// 5. action creators
function getItems() {
  return dispatch => {
    axios.get("/cart").then(resp => {
      dispatch({
        type: GET_ITEM,
        payload: resp.data
      })
    })
  }
}

function addItem(product) {
  return dispatch => {
    axios.post("/cart", product).then(resp => {
      dispatch(getItems())
    })
  }
}

// 6. custom hook
export function useItems() {
  const dispatch = useDispatch()
  const cart = useSelector(appState => appState.cartState.cart)
  const add = product => dispatch(addItem(product))

  useEffect(() => {
    dispatch(getItems())
  }, [])

  return { cart, add }
}
