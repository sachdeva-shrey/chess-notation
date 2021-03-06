const Header = () => {
  return (
    <div className="my-3 mx-2 lg:mx-10 flex">
      <img
        className="w-auto h-6 lg:h-8"
        src="/logo-with-text.png"
        alt="Chess Notation Logo"
      />
      <div className="lg:ml-auto flex justify-center items-center lg:space-x-3">
        <div className="flex space-x-2 justify-center items-center cursor-pointer underline px-6">
          <img className="w-auto h-6" src="/github.svg" alt="Github Logo" />
          <h5 className="text-xs lg:text-sm">Github</h5>
        </div>
        <a
          className="gumroad-button"
          href="https://gum.co/chess-notation"
          target="_blank"
        >
          <div className="flex items-center space-x-2 bg-gray-100 px-2 py-1 lg:px-6 lg:py-3 rounded-md cursor-pointer">
            <h5 className="text-xs lg:text-sm">Support</h5>
            <img src="/heart.svg" className="h-5 w-5" alt="Heart Icon" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Header;
