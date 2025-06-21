import { createStore } from 'redux'

import { productsList } from './productsList.js'


const initialState = {
  products: productsList,
  cartItems :[],
  wishList: [],
}

const CART_ADD_ITEM = 'cart/addItem';
const CART_REMOVE_ITEM = 'cart/removeItem';
const CART_ITEM_INCREASE_QUANTITY = 'cart/increaseItemQuantity';
const CART_ITEM_DECREASE_QUANTITY = 'cart/decreaseItemQuantity';

const WISHLIST_ADD_ITEM = 'cart/addItem';
const WISHLIST_REMOVE_ITEM = 'cart/removeItem';

function reducer(state = initialState, action) {

   switch(action.type){
    case CART_ADD_ITEM:
      return {...state, cartItems:[...state.cartItems, action.payload]}
    case CART_REMOVE_ITEM:
      return {...state, cartItems: state.cartItems.filter(cartItem => cartItem.productId !== action.payload.productId)}
    case CART_ITEM_INCREASE_QUANTITY:
      return {...state , cartItems: state.cartItems.map(cartItem => {
        if(cartItem.productId === action.payload.productId){
           return {...cartItem, quantity: cartItem.quantity + 1}
        } 
        return cartItem;
      })}  

    case CART_ITEM_DECREASE_QUANTITY:
      return{...state, cartItems: state.cartItems.map((cartItem) => {
        if(cartItem.productId === action.payload.productId && cartItem.quantity > 1) {
          return {...cartItem, quantity: cartItem.quantity - 1}
        }
      })}
    default:
      return state;
    
    }
     
}



const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.())

console.log(store);



store.dispatch({type:CART_ADD_ITEM, payload: {productId: 1, quantity: 1}})
store.dispatch({type:CART_ADD_ITEM, payload: {productId: 12, quantity: 1}})
store.dispatch({type:CART_ADD_ITEM, payload: {productId: 13, quantity: 1}})
store.dispatch({type:CART_ADD_ITEM, payload: {productId: 17, quantity: 1}})
store.dispatch({type:CART_REMOVE_ITEM, payload: {productId: 12}})

store.dispatch({type:CART_ITEM_INCREASE_QUANTITY, payload: {productId: 12}})
store.dispatch({type:CART_ITEM_INCREASE_QUANTITY, payload: {productId: 12}})
store.dispatch({type:CART_ITEM_INCREASE_QUANTITY, payload: {productId: 15}})
store.dispatch({type:CART_ITEM_DECREASE_QUANTITY, payload: {productId: 12}})


console.log(store.getState());        