import React from 'react';
import './Container.css';

function Container({ children, title }) {
  return (
    <div className="container">
      {title && <h2 className="container-title">{title}</h2>}
      <div className="container-content">
        {children}
      </div>
    </div>
  );
}

export default Container;