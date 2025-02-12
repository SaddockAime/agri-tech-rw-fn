/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';

interface HomePageProps {
  isAuthenticated: boolean;
  userRole?: 'buyer' | 'seller';
}

const HomePage: React.FC<HomePageProps> = ({ isAuthenticated, userRole }) => {
  return (
    <div>
      {/* {!isAuthenticated && ( */}
        <div className="banner">
          <h2>Rwandan Farmers have different products for you.</h2>
          <p className="btn-link">Change language</p>
        </div>
      {/* )} */}
      {/* {isAuthenticated && userRole === 'buyer' && (
        <div className="banner">
          <h2>Want to sell your products?</h2>
          <p>Upgrade your profile to become a seller and start listing your products!</p>
          <Link to="/become-seller" className="btn-link">Upgrade to Seller</Link>
        </div>
      )} */}
      {/* Other homepage content */}
    </div>
  );
};

export default HomePage;
