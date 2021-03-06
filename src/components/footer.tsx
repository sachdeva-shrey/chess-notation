const Footer = () => {
  return (
    <div className="bg-gray-100 py-3 flex flex-col justify-between">
      <div className="max-w-6xl m-auto text-gray-800 flex text-center justify-center">
        <h3>
          This app is completely free and open source. If you like this app and
          would like to support it, please consider{" "}
          <a
            className="gumroad-button underline"
            href="https://gum.co/chess-notation"
            target="_blank"
            rel="noreferrer"
          >
            donating.
          </a>
        </h3>
      </div>
      <div
        className="flex px-3 m-auto pt-5 border-t text-gray-800 text-sm flex-col
      md:flex-row max-w-6xl"
      >
        <div className="mt-2">
          © Copyright 2021.{" "}
          <a
            className="gumroad-button underline"
            href="https://github.com/sachdeva-shrey"
            target="_blank"
            rel="noreferrer"
          >
            @shreysachdeva
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
