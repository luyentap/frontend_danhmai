
import ProductService from "../service/ProductService";
import {
  ADD_QUANTITY,
  ADD_TO_CART,
  PRODUCT_FETCH_SUCCESS,
  REMOVE_ITEM,
  SUB_QUANTITY,
  FETCH_PRODUCT,
  ADD_PRODUCT,
  DELETE_PRODUCT
} from "./ActionTypes";

export const fetchAllProduct = (products)  =>{
  return ({
    type: PRODUCT_FETCH_SUCCESS,
    products
  })
}

export const addToCart = (id)  =>{
  return ({
    type: ADD_TO_CART,
    id
  })
}

//remove item action
export const removeItem=(id)=>{
  return{
    type: REMOVE_ITEM,
    id
  }
}
//subtract qt action
export const subtractQuantity=(id)=>{
  return{
    type: SUB_QUANTITY,
    id
  }
}
//add qt action
export const addQuantity=(id)=>{
  return{
    type: ADD_QUANTITY,
    id
  }
}

//admin----------------
export const fetchProduct = (products) => {
  return {
    type:FETCH_PRODUCT,
    products
  }
}
//----add-product------------
export const addProduct = (product) => {
  return {
    type:ADD_PRODUCT,
    product
  }
}
export const deleteProduct = (id) => {
  return {
    type:DELETE_PRODUCT,
    id
  }
}
