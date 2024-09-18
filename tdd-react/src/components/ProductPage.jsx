import React from "react";
import { ProductData } from "../shared/products";

const ProductPage = ({productName}) => {
  const order = ProductData.find((r) => r.productName === productName);
  return (
    <div data-testid="product-id">
      <h2>Order Details</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Order Id</th>
            <th>Order Date</th>
            <th>Shipping Address</th>
            <th>Seller</th>
            <th>Expected Delivery By</th>
          </tr>
        </thead>
        <tbody>
          {
            <tr>
              <td data-testid="product-order-id">{order ? order.orderId : ""}</td>
              <td>{order ? order.orderDate : ""}</td>
              <td>{order ? order.dispatchedAddress: ""}</td>
              <td>{order ? order.sellerDetails : ""}</td>
              <td>{order ? order.expectedDelivery : ""}</td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  );
};

export default ProductPage;