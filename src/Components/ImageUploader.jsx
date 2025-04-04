import React from "react";

const ImageUploader = ({ handleImageUpload }) => {
  const ImageHandler = (e) => {
    const file = e.target.files[0];
    if (file) {
      handleImageUpload(file);
    }
    // const reader = new FileReader();
    // reader.onloadend = () => {
    //   setImage(reader.result);
    // };
    // reader.readAsDataURL(file);
  };
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 xl: m-2  px-6 py-3 shadow-lg bg-white rounded-2xl ">
      <label
        htmlFor="fileInput"
        className="block w-full px-10 py-6 text-center hover:border-blue-500 transition-all cursor-pointer border-2 border-dashed border-gray-300 rounded-lg"
      >
        <input
          type="file"
          id="fileInput"
          className="hidden"
          onChange={ImageHandler}
        />
        <p className="text-xl text-gray-600">
          Click and drag to upload your image
        </p>
      </label>
    </div>
  );
};

export default ImageUploader;
