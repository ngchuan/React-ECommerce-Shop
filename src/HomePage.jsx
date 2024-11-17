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


  // const renderFeaturedProducts = () => {
  //   const productElements = [];
  //   for (const product of featuredProducts) {
  //     productElements.push(
  //       <div key={product.id} className="col-md-3 mb-4">
  //         <ProductCard
  //           id={product.id}
  //           imageUrl={product.image}
  //           productName={product.name}
  //           price={product.price.toFixed(2)}
  //         />
  //       </div>
  //     );
  //   }
  //   return productElements;
  // };

  return (
    <>

      <Header title="Welcome to E-Shop"
        subtitle="Discover amazing products at unbeatable prices!" />


      {/* <header className="bg-primary text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">Welcome to E-Commerce Shop</h1>
          <p className="lead">Discover amazing products at unbeatable prices!</p>
          <a href="#" className="btn btn-light btn-lg">Shop Now</a>
        </div>
      </header> */}

      <main className="container my-5">
        <h2 className="text-center mb-4">Featured Products</h2>

        <div className="row">
          {featuredProducts.length ? renderFeaturedProducts() : <p>Loading...</p>}
          <div className="col-md-3 mb-4">
            <ProductCard
              imageUrl="screw.avif"
              productName="Product 1"
              price="19.99"
            />
          </div>

          <div className="col-md-3 mb-4">
            <ProductCard
              imageUrl="https://picsum.photos/id/1/300/200"
              productName="Product 2"
              price="29.99"
            />
          </div>

          <div className="col-md-3 mb-4">
            <ProductCard
              imageUrl="https://picsum.photos/id/26/300/200"
              productName="Product 3"
              price="39.99"
            />
          </div>

          <div className="col-md-3 mb-4">
            <ProductCard
              imageUrl="https://picsum.photos/id/96/300/200"
              productName="Product 4"
              price="49.99"
            />
          </div>


        </div>
      </main>
    </>
  );
}

