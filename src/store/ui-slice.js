import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    cartIsVisible: false,
    notification: {},
    showModal: false,
    showOrderModal: false,
    showCheckoutForm: false,
    loadedItems: 6,
  },
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
    showCheckOutModal(state) {
      state.showModal = !state.showModal;
    },
    showOrderModal(state) {
      state.showOrderModal = !state.showOrderModal;
    },
    showCheckout(state) {
      state.showCheckoutForm = !state.showCheckoutForm;
    },
    loadMore(state) {
      state.loadedItems = state.loadedItems + state.loadedItems;
    },
    loadLess(state) {
      if (state.loadedItems > 6) {
        state.loadedItems = state.loadedItems - 6;
      }
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
