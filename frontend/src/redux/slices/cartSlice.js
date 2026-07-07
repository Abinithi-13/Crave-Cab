//store cart items
//track restaurant info
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    restaurant:{},
    loading: false,
    error: null
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        cartRequest: (state) => {
            state.loading = true;
        },
        cartSuccess: (state, action) => {
            state.loading = false;
            state.cartItems = action.payload.items;
            state.restaurant = action.payload.restaurant;
        },
        cartFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        updateCartSuccess: (state, action) => {
            state.cartItems = [...action.payload];
        },
        removeCartSuccess: (state, action) => {
            state.cartItems = [...action.payload];
            state.restaurant = action.payload.restaurant ||{};
        },
        clearCart: (state) => {
            state.cartItems = [];
        },
        clearErrors: (state) => {
            state.error = null;
        },
        saveDeliveryInfo: (state, action) => {
            state.deliveryInfo = action.payload;
        }
    }
});

export const {
    cartRequest, 
    cartSuccess, 
    cartFailure, 
    updateCartSuccess, 
    removeCartSuccess, 
    clearCart, 
    clearErrors, 
    saveDeliveryInfo
} = cartSlice.actions;

export default cartSlice.reducer;