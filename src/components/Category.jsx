import {React} from 'react';
import Plant from './Plant';
//import './Category.css';

function Category({ category }) {
  return (
    <div>
      <div class="category-container">
        <h1 class="category-title">{category.category}</h1>
      </div>
      <div className="product-list">
        {category.plants.map((plant, index) => (
          <Plant key={index} plant={plant} />
        ))}
      </div>
    </div>
  );
}

export default Category;