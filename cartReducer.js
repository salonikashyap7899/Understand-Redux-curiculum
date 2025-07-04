


// Action tupe
export const CART_ADD_ITEM = 'cart/addItem';
export const CART_REMOVE_ITEM = 'cart/removeItem';
export const CART_ITEM_INCREASE_QUANTITY = 'cart/increaseItemQuantity';
export const CART_ITEM_DECREASE_QUANTITY = 'cart/decreaseItemQuantity';

// action creators

export function AddCartItem(productId, quantity = 1) {
  return { 
    type: CART_ADD_ITEM, 
    payload: { productId: productId,  quantity:  quantity } 
  }
}


export function removeItem(productId){
  return { 
    type: CART_REMOVE_ITEM, 
    payload: { productId: productId }
 
  }
}

export function decreaseCartItemQuantity(productId){
  return { 
    type: CART_ITEM_DECREASE_QUANTITY, 
    payload: { productId: productId }
 
  }
}

export function increaseCartItemQuantity(productId){
  return{
    type: CART_ITEM_INCREASE_QUANTITY,
    payload: { productId: productId }
  }
}



// reducers
export  default function cartReducer(state = [], action) {
      switch(action.type){
    case CART_ADD_ITEM:
      return [...state, action.payload]
    case CART_REMOVE_ITEM:
      return state.filter(cartItem => cartItem.productId !== action.payload.productId)
    case CART_ITEM_INCREASE_QUANTITY:
      return state.map(cartItem => {
        if(cartItem.productId === action.payload.productId){
           return {...cartItem, quantity: cartItem.quantity + 1}
        } 
        return cartItem;
      }) 
 
    case CART_ITEM_DECREASE_QUANTITY:
      return state.map((cartItem) => {
        if(cartItem.productId === action.payload.productId && cartItem.quantity > 1) {
          return {...cartItem, quantity: cartItem.quantity - 1}
        }
        return cartItem;
      }).filter((cartItem)=> cartItem.quantity > 0)
    default:
      return state;
    
    }
}