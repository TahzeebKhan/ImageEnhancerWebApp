/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import ImageUploader from "./ImageUploader";
import ImagePreviewer from "./ImagePreviewer";
import { enhancedImageAPI } from "../utils/EnhanceImageAPI";

const Home = () => {
  const [uploadImage, setUploadImage] = useState(null);
  const [enhancedImage, setEnhancedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = async (image) => {
    setUploadImage(URL.createObjectURL(image));
    setLoading(true);

    try {
      const enhancedURL = await enhancedImageAPI(image);
      setEnhancedImage(enhancedURL);
      setLoading(false);
    } catch (error) {
      console.error(error);
      alert("Error uploading image: " + error.message);
    }
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = enhancedImage?.image;
    link.download = "enhanced-image.jpg"; // You can customize the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <ImageUploader handleImageUpload={handleImageUpload} />
      <ImagePreviewer
        loading={loading}
        uploadImage={uploadImage}
        enhancedImage={enhancedImage?.image}
        handleDownload={handleDownload}
      />
    </>
  );
};

export default Home;
