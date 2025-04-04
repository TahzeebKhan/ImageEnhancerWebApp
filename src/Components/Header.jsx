import React from "react";

const Header = () => {
  return (
    <header className="w-full text-center ">
      <p className="text-xl bg-black w-full text-gray-200  mx-auto px-4">
        Enhance your images effortlessly with AI-powered technology.
      </p>
      <div className="w-full mt-10">
        <h1 className="text-5xl tracking-tight font-semibold ">
          AI Image Enhancer
        </h1>
        <p className="text-md text-gray-600">
          Upload Your Image and Let AI enhance it for you.
        </p>
      </div>
    </header>
  );
};

export default Header;
