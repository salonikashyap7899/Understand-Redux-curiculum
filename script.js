import { createStore, combineReducers } from 'redux';
import { productsList } from './productsList'; // ✅ Works with your current export
;
import cartReducer, {
  AddCartItem,
  CART_ADD_ITEM,
  CART_ITEM_DECREASE_QUANTITY,
  CART_ITEM_INCREASE_QUANTITY,
  decreaseCartItemQuantity,
  increaseCartItemQuantity,
  removeItem
} from './cartReducer';
import wishListReducer, {
  WISHLIST_ADD_ITEM,
  WISHLIST_REMOVE_ITEM
} from './wishListReducer';
import productsReducer from './productReducer';

// function combineReducers(reducers) {
//   const reducerKeys = Object.keys(reducers)

//   return function (state = {}, action) {
//     const nextState = {}
    
//     for (let i = 0; i < reducerKeys.length; i++) {
//       const key = reducerKeys[i]
//       const reducer = reducers[key]
//       const previousStateForKey = state[key]
//       const nextStateForKey = reducer(previousStateForKey, action)
//       nextState[key] = nextStateForKey
//     }

//     return nextState
//   }
// }



const reducer = combineReducers({
  products: productsReducer,
  cartItem: cartReducer,
  wishList: wishListReducer
});



const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__?.() || (f => f)
);
console.log(store);



store.dispatch(AddCartItem(1, 2));
store.dispatch(removeItem(12))
store.dispatch(decreaseCartItemQuantity(70))
store.dispatch(increaseCartItemQuantity(1))

 




console.log(store.getState());
