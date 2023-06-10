import React from 'react';

const Product = ({ key, category, subCategory, location, status, price, link }) => {
  console.log(category, subCategory, location, status, price, link)
  return (
    <div className="product-info">
      <h5>{category}</h5>
      <h5>{subCategory}</h5>
      <h5>{location}</h5>
      <h5>{status}</h5>
      <h6>{price}₪</h6>
      <a href={link}>Link</a>
    </div>
  );
};

export default Product;
