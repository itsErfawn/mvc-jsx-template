const React = require('react');
const Header = require('./components/Header');
const Footer = require('./components/Footer');

const Home = ({ title, message }) => {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-gray-600">
          {message}
        </p>
        <Footer />
      </main>
    </div>
  );
};

module.exports = Home; 