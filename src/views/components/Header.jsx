const React = require('react');

const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4">
      <nav className="container mx-auto">
        <h1 className="text-2xl font-bold">وب‌سایت من</h1>
        <ul className="flex space-x-4 mt-2">
          <li><a href="/" className="hover:text-blue-200">خانه</a></li>
          <li><a href="/about" className="hover:text-blue-200">درباره ما</a></li>
          <li><a href="/contact" className="hover:text-blue-200">تماس با ما</a></li>
        </ul>
      </nav>
    </header>
  );
};

module.exports = Header; 