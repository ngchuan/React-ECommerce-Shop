// import React from 'react';
import React, { useEffect } from 'react'; // Correct import for React and useEffect

import Navbar from './Navbar';
import HomePage from './HomePage';
import ProductsPage from './ProductsPage';
import RegisterPage from './RegisterPage';

import { useFlashMessage } from './FlashMessageStore';
import Footer from './Footer';
import "./styles.css";

import { Route, Switch } from 'wouter';
import ShoppingCart from './ShoppingCart';

export default function App() {

  const { getMessage, clearMessage } = useFlashMessage();
  const flashMessage = getMessage();
  console.log(flashMessage);

  useEffect(() => {

    const timer = setTimeout(() => {
      clearMessage();
    }
      , 3000);
    return () => {
      clearTimeout(timer);
    };
  }
    , [flashMessage]);

  return (
    <>
      <Navbar />


      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/products" component={ProductsPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/Cart" component={ShoppingCart} />
      </Switch>
      {/* {flashMessage.message && (
        <div className={`alert alert-${flashMessage.type} text-center flash-alert`} role="alert">
          {flashMessage.message}
        </div>
      )} */}

      {flashMessage?.message && (
      <div className={`alert alert-${flashMessage.type} text-center flash-alert`} role="alert">
        {flashMessage.message}
      </div>
      )}


      <Footer />

    </>
  );
}

