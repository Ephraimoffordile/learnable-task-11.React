import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f0f0f0' }}>
      <p>&copy; {new Date().getFullYear()} Job Listings App</p>
    </footer>
  );
};

export default Footer;