import React, { useState } from "react";

const productsList = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Headphones", price: 3000 },
  { id: 3, name: "Keyboard", price: 1500 },
];

const CartApp = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item, index) => index !== id);
    setCart(updatedCart);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={styles.container}>
      <h1>🛒 Simple Cart</h1>

      <div style={styles.section}>
        <h2>🧾 Products</h2>
        {productsList.map((product) => (
          <div key={product.id} style={styles.product}>
            <span>{product.name} - ₹{product.price}</span>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <div style={styles.section}>
        <h2>🛍️ Cart ({cart.length} items)</h2>
        {cart.length === 0 ? (
          <p>Cart is empty</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - ₹{item.price}{" "}
                <button onClick={() => removeFromCart(index)}>❌ Remove</button>
              </li>
            ))}
          </ul>
        )}
        <h3>Total: ₹{total}</h3>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial",
    padding: "20px",
    backgroundColor: "#f2f2f2",
    color: "#333",
  },
  section: {
    margin: "20px 0",
    padding: "10px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 0 5px rgba(0,0,0,0.1)",
  },
  product: {
    display: "flex",
    justifyContent: "space-between",
    padding: "5px 0",
  },
};

export default CartApp;
