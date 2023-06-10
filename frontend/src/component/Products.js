import React from "react";
import { useLocation } from "react-router-dom";
import './Products.css'

const Products = () => {
  const location = useLocation();
  const products = location.state.filteredData || [];

  const handleViewClick = (url) => {
    window.location.href = url;
  };

  return (
    <div className="AdminTable">
      <table>
        <thead>
          <tr>
            <th>קטגוריה</th>
            <th>תת קטגוריה</th>
            <th>שם מוצר </th>
            <th>מחיר</th>
            <th>מצב מוצר</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product[0]}>
              <td>{product[0]}</td>
              <td>{product[1]}</td>
              <td>{product[2]}</td>
              <td>{product[3]}₪</td>
              <td>{product[4]}</td>
              <td>
                <button onClick={() => handleViewClick(product[5])}>view</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
