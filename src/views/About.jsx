const React = require('react');
const Header = require('./components/Header');

const About = ({ title, content }) => {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-gray-600">
          {content}
        </p>
      </main>
    </div>
  );
};

module.exports = About; 