import {
  ADD_QUANTITY,
  ADD_TO_CART,
  PRODUCT_FETCH_SUCCESS,
  REMOVE_ITEM,
  SUB_QUANTITY,
  FETCH_PRODUCT,
  ADD_PRODUCT,
  DELETE_PRODUCT
} from "../actions/ActionTypes";
import {combineReducers} from 'redux'
import ProductService from "../service/ProductService";
import React from "react";
import {loadState} from "../common/LocalSave";

//get value of (cart+total) in localstorage -->init reducer
let initTotal = loadState("total")||0;
let initAddedItems = loadState("shoppingCart")||[];

let initSate = {
  products_new: [],
  products_hot: [],
  products_best: [],
  addedItems:initAddedItems,
  total: initTotal,
  all_product : []
}

export const productReducer = (state=initSate, action) => {
  switch (action.type) {
    //admin-----------
    case FETCH_PRODUCT :
      return Object.assign({}, state, action.products)
    case DELETE_PRODUCT:
      var update_item = state.all_product.filter(product=>product.id!=action.id);
      console.log(update_item);
      return {
        ...state,
        all_product:update_item
      }
    case ADD_PRODUCT:
      return {
        ...state,
        all_product : [...state.all_product,action.product]
      }


    /******
    client
     ******/
    case PRODUCT_FETCH_SUCCESS :
      return Object.assign({}, state, action.products)
    case ADD_TO_CART :
      // Products which is added recently
      var addedItem = state.products_hot.find(item => item.id == action.id);
      //check product is exist
      var existed_item = state.addedItems.find(item => action.id == item.id);
      //calculator the new total price after adding product
      var total_price = parseInt( state.total) + parseInt(addedItem.new_price);
      if (existed_item) {
        addedItem.quantity += 1
        return {
          ...state,
          total: total_price
        }
      }
      else {
        addedItem.quantity = 1;
        return {
          ...state,
          addedItems: [...state.addedItems, addedItem],
          total: total_price
        }
      }
    case REMOVE_ITEM:
      //calculating the total
      var itemToRemove = state.addedItems.find(item => action.id == item.id);
      let newTotal = state.total - (itemToRemove.new_price * itemToRemove.quantity);
      var new_items = state.addedItems.filter(item => action.id != item.id);
      return {
        ...state,
        addedItems: new_items,
        total: newTotal
      }
    case ADD_QUANTITY:
      var addedItem = state.addedItems.find(item => item.id === action.id);
      addedItem.quantity += 1;

      var newTotal = state.total + addedItem.new_price;
      return {
        ...state,
        addedItems: [...state.addedItems],
        total: newTotal
      }
    case SUB_QUANTITY:
      var addedItem = state.addedItems.find(item => item.id === action.id);
      //if the quatity of product is 0, remove product to the list of state
      if (addedItem.quantity === 1) {
        let new_items = state.addedItems.filter(item => item.id !== action.id)
        let newTotal = state.total - addedItem.new_price
        return {
          ...state,
          addedItems: new_items,
          total: newTotal
        }
      }
      else {
        addedItem.quantity -= 1
        let newTotal = state.total - addedItem.new_price
        return {
          ...state,
          addedItems: [...state.addedItems],
          total: newTotal
        }
      }
    default: // need this for default case
      return state
  }
}
