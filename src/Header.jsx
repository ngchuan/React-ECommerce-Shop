import React from 'react';


export default function Header({ title, subtitle }) {
    return (
      <header className="bg-primary text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">{title}</h1>
          <p className="lead">{subtitle}</p>
          <a href="#" className="btn btn-light btn-lg">Shop Now</a>
        </div>
      </header>
    );
  }