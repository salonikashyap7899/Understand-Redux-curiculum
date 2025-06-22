import { combineReducers, createStore } from 'redux'
import { productsList } from './productsList';
import cartReducer, { CART_ADD_ITEM, CART_ITEM_DECREASE_QUANTITY, CART_ITEM_INCREASE_QUANTITY, cartReducer } from './cartReducer';
import wishListReducer,  { WISHLIST_ADD_ITEM, WISHLIST_REMOVE_ITEM, wishListReducer } from './wishListReducer';


const reducer = combineReducers({
  products: productsList,
  cartItem: cartReducer,
  wishList: wishListReducer
})




const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.())

console.log(store); 
 


store.dispatch({type:CART_ADD_ITEM, payload: {productId: 1, quantity: 1}})
store.dispatch({type:CART_ADD_ITEM, payload: {productId: 17, quantity: 1}})
// store.dispatch({type:CART_REMOVE_ITEM, payload: {productId: 12}})
store.dispatch({type:CART_ITEM_INCREASE_QUANTITY, payload: {productId: 1}})
store.dispatch({type:CART_ITEM_DECREASE_QUANTITY, payload: {productId: 12}})


store.dispatch({type:WISHLIST_ADD_ITEM, payload: {productId: 20}})
store.dispatch({type: WISHLIST_REMOVE_ITEM, payload: {productId: 23}})
// store.dispatch({type:WISHLIST_REMOVE_ITEM, payload: {productId: 2}})

// console.log(store.getState());        