import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products';

function ProductDetail() {
  const { slug } = useParams();
  
  // Find the product that matches the URL slug
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return <div className="error-msg">Product not found.</div>;
  }

  return (
    <div className="product-page-container">
      <div className="product-image-section">
        <img src={product.images[0]} alt={product.name} />
      </div>
      
      <div className="product-info-section">
        <p className="category-label">{product.category} / {product.subCategory}</p>
        <h1>{product.name}</h1>
        <p className="price">KES {product.price.toLocaleString()}</p>
        
        <div className="description">
          <p>{product.description}</p>
        </div>

        <div className="selectors">
          {/* We will add Size/Color selectors here in the next step */}
        </div>

        <button className="add-btn">ADD TO CART</button>
      </div>
    </div>
  );
}

export default ProductDetail;