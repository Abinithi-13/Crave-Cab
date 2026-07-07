//fetch cart items
//add items
//update items
//remove items
//handle loading an derrors

import api from "../../utils/api";
import {
    cartRequest, 
    cartSuccess, 
    cartFailure, 
    updateCartSuccess, 
    removeCartSuccess, 
} from "../slices/cartSlice";

//fetch

export const fetchCartItems = () => async (dispatch) => {
    try {
        dispatch(cartRequest());
        const {data} = await api.get("/v1/eats/cart/get-cart");
        dispatch(cartSuccess(data.data))
        console.log("CART API", data.data)
    } catch (error) {
        dispatch(cartFailure(error.response?.data?.message));
    }
};

//add cart items
//food items id
//restaurants
//quantity


export const addItemToCart = (foodItemId, restaurantId, quantity) => async (dispatch,getState) => {
    try {
        dispatch(cartRequest());
        const {user} = getState().user;
        const {data} = await api.post("/v1/eats/cart/add-to-cart", {
            userId: user._id,
            foodItemId,
            restaurantId,
            quantity
        });
        dispatch(cartSuccess({ items: data.cart.items,
            restaurant: data.cart.restaurant
         }));
    } catch (error) {
        dispatch(cartFailure(error.response?.data?.message));
    }
};

//update cart items
export const updateCartQuantity = (foodItemId, quantity) => async (dispatch,getState) => {
    try {
        const {user} = getState().user;
        const {data} = await api.put("/v1/eats/cart/update-cart-item", {
            userId: user._id,
            foodItemId,
            quantity
        });
        dispatch(updateCartSuccess(data.cart.items));
    } catch (error) {
        dispatch(cartFailure(error.response?.data?.message));
    }
};

//remove cart items
export const removeItemFromCart = (foodItemId) => async (dispatch,getState) => {
    try {
        const {user} = getState().user;
        const {data} = await api.delete("/v1/eats/cart/delete-cart-item", {
            data: { userId: user._id ,
            foodItemId
            }
        });
        dispatch(removeCartSuccess(data.cart.items));
        dispatch(fetchCartItems());
    } catch (error) {
        dispatch(cartFailure(error.response?.data?.message));
    }
};