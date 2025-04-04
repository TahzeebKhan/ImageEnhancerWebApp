import Loader from "./Loader";

const ImagePreviewer = ({
  loading,
  uploadImage,
  enhancedImage,
  handleDownload,
}) => {
  return (
    <div className="w-[80%] sm:w-1/2 h-180 sm:h-150 md:h-90 md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 mt-2 max-w-4xl">
      {/* Showing Original Image */}
      <div className="w-full h-full border-xl border-gray-200 border bg-white shadow-lg rounded-xl overflow-hidden relative">
        <h2 className="text-xl font-light text-center bg-gray-800 text-white py-2">
          Original Image
        </h2>
        {uploadImage ? (
          <>
            <img
              src={uploadImage}
              alt=""
              className="w-full h-full object-cover object-center  overflow-hidden"
            />
          </>
        ) : (
          <div className="flex items-center justify-center h-full bg-white">
            No Image Selected
          </div>
        )}
      </div>

      {/* Showing Enhanced Image */}
      <div className="w-full h-full border-xl border-gray-200 border bg-white shadow-lg rounded-xl  overflow-hidden relative">
        <h2 className="text-xl font-light text-center bg-gray-800 text-white py-2">
          Enhanced Image
        </h2>
        {enhancedImage && !loading && (
          <>
            <img
              src={enhancedImage}
              alt=""
              className="w-full h-full  object-cover object-center overflow-hidden"
            />
            <button
              onClick={handleDownload}
              className="w-full inset-0 absolute bottom-0 opacity-0 px-3 py-2 bg-blue-500 cursor-pointer text-white "
            >
              Download
            </button>
          </>
        )}

        {loading ? (
          <Loader />
        ) : (
          <div className="flex items-center justify-center h-full bg-white">
            No Enhanced Image
          </div>
        )}
      </div>
    </div>
  );
};

export default ImagePreviewer;

// {enhancedImage && !loading && (
//
// )}
