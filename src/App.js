import React from 'react';

function App() {
  const products = [
    { id: 1, name: 'T-shirt', price: 199 },
    { id: 2, name: 'Laptop', price: 49999 },
    { id: 3, name: 'Shoes', price: 2999 }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>🛒 Product Catalog</h1>
      <ul>
        {products.map(p => (
          <li key={p.id}>{p.name} - ₹{p.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

