import React from 'react';
import { Link } from 'react-router-dom';

const LogoutPage = () => {
  return (
    <div className="logout-page">
      <h1>You have been logged out.</h1>
      <p>Thank you for using our application.</p>
      <Link to="/login">Login Again</Link>
    </div>
  );
};

export default LogoutPage;