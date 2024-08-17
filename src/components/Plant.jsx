import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../CartSlice';
import { selectIsPlantInCart } from '../selectors'; // Adjust the path as needed

function Plant({ plant }) {
  const dispatch = useDispatch();
  const [isInCart, setIsInCart] = useState(false);

  // Use plant.name as the ID
  const plantId = plant.name;

  // Check if the current plant is in the cart
  const isPlantInCart = useSelector(state => selectIsPlantInCart(state, plantId));

  useEffect(() => {
    setIsInCart(isPlantInCart);
  }, [isPlantInCart]);

  const handleAddToCart = () => {
    dispatch(addItem({ id: plantId, plant }));
    setIsInCart(true); // Disable button after adding to cart
  };

  return (
    <div className="product-card">
      <img className="product-image" src={plant.image} alt={plant.name} />
      <h3 className="product-title">{plant.name}</h3>
      <p>{plant.description}</p>
      <p>{plant.cost}</p>
      <button
        className={isInCart ? "product-button added-to-cart": "product-button"}
        onClick={handleAddToCart}
        disabled={isInCart}
      >
        {isInCart ? 'Added to Cart' : 'Add to Cart'}
      </button>
    </div>
  );
}

export default Plant;
