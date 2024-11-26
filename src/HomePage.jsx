// import React from 'react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import Header from './Header'; // Import Header


export default function HomePage() {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  // Fetching products using Axios when the component mounts
  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const response = await axios.get('/featured.json');
        setFeaturedProducts(response.data);
      } catch (error) {
        console.error('Error fetching featured products:', error);
      }
    };

    fetchFeaturedProducts();
  }, []);

  const renderFeaturedProducts = () => {
    return featuredProducts.map((product) => (
      <div key={product.id} className="col-md-3 mb-4">
        <ProductCard
          id={product.id}
          imageUrl={product.image}
          productName={product.name}
          price={(product.price || 0).toFixed(2)}
        />
      </div>
    ));
  };

  return (
    <>

      <Header title="Welcome to E Commerce Shop"
        subtitle="Discover amazing products at unbeatable prices!" />

      <main className="container my-5">
        <h2 className="text-center mb-4">Featured Products</h2>

        <div className="row">
          {featuredProducts.length ? renderFeaturedProducts() : <p>Loading...</p>}

        </div>
      </main>
    </>
  );
}

