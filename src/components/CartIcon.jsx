import React from 'react';
import { useSelector } from 'react-redux';
import { selectCartItemCount } from '../selectors'; // Adjust the path as needed

function CartIcon({ onClick }) {
  const itemCount = useSelector(selectCartItemCount);

  return (
    <div>
      <a href="#" onClick={onClick} style={{ textDecoration: 'none' }}>
        <h1 className="cart">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="IconChangeColor" height="68" width="68">
            <rect width="156" height="156" fill="none"></rect>
            <circle cx="80" cy="216" r="12"></circle>
            <circle cx="184" cy="216" r="12"></circle>
            <path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8"
             fill="none" stroke="#faf9f9" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" id="mainIconPathAttribute"></path>
          </svg>
          {itemCount > 0 && (
            <span className="cart_quantity_count">{itemCount}</span>
          )}
        </h1>
      </a>
    </div>
  );
}

export default CartIcon;
