// Select the total count of items in the cart
export const selectCartItemCount = (state) => {
  return state.cart.items.reduce((total, item) => total + item.quantity, 0);
};

// Check if a specific plant is in the cart
export const selectIsPlantInCart = (state, plantId) => {
  return state.cart.items.some(item => item.id === plantId);
};