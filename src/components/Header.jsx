function Header() {
  return (
    <header className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="/" className="flex items-center">
          <img
            src="/favicon-32x32.png"
            className="h-6 mr-3 sm:h-9"
            alt="Hypothetical Automotive Company Logo"
          />
          <span className="px-3 pt-3 self-center text-xl font-semibold whitespace-nowrap">
            Hypothetical Automotive Company
          </span>
        </a>
      </div>
    </header>
  );
}

export default Header;
