const Header = () => {
  return (
    <div className="my-3 mx-10 flex">
      <img
        className="w-auto h-8"
        src="/logo-with-text.png"
        alt="Chess Notation Logo"
      />
      <div className="ml-auto flex justify-center items-center space-x-3">
        <div className="flex space-x-2 justify-center items-center cursor-pointer underline px-6">
          <img className="w-auto h-6" src="/github.svg" alt="Github Logo" />
          <h5 className="text-sm">Github</h5>
        </div>
        <a
          className="gumroad-button"
          href="https://gum.co/chess-notation"
          target="_blank"
        >
          <div className="flex items-center space-x-2 bg-gray-100 px-6 py-3 rounded-md cursor-pointer">
            <h5 className="text-sm">Support</h5>
            <img src="/heart.svg" className="h-5 w-5" alt="Heart Icon" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Header;
