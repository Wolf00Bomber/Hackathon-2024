import React, { useState } from "react";
import { DashboardData } from "../shared/mock-data";
import ProductPage from "./ProductPage";

const Dashboard = () => {
    const [selectedProduct, setSelectedProduct] = useState("");
    const data = DashboardData;
    const onProductClick = function(e) {
        console.log(e.target.innerText);
        setSelectedProduct(e.target.innerText);
    }

    return (
        <div data-testid="dashboard-id">
            <h2>Orders List</h2>
            <table border="1">
                <thead>
                <tr>
                    <th>Product Name</th>
                    <th>Product Cost($)</th>
                    <th>Product Quantity(KG)</th>
                </tr>
                </thead>
                <tbody>
                {data.map((product, index) => (
                    <tr key={index}>
                    <td onClick={onProductClick}>{product.productName}</td>
                    <td>{product.productCost}</td>
                    <td>{product.productQuantity}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            {
                selectedProduct && selectedProduct != "" && <ProductPage product={selectedProduct}/>
            }
        </div>

        
    )
}

export default Dashboard;