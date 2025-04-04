import axios from "axios";

const API_KEY = "wxuc0mh7mwim4ldto"; // Replace with your actual API key
const BASE_URL = "https://techhk.aoscdn.com/";
const MAXIMUM_RETRIES = 20;

export const enhancedImageAPI = async (file) => {
  try {
    const taskId = await uploadImage(file);
    console.log("Image Uploaded Successfully, Task ID:", taskId);

    const enhancedImageData = await PollForEnhancedImage(taskId);
    console.log("Enhanced Image Data:", enhancedImageData);

    return enhancedImageData;
  } catch (error) {
    console.log("Error enhancing image:", error.message);
  }
};

const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append("image_file", file);

  const { data } = await axios.post(
    `${BASE_URL}/api/tasks/visual/scale`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        "X-API-KEY": API_KEY,
      },
    }
  );

  if (!data?.data?.task_id) {
    throw new Error("Failed to upload image! Task ID not found.");
  }
  return data.data.task_id;
};

const PollForEnhancedImage = async (taskId, retries = 0) => {
  const result = await fetchEnhancedImage(taskId);

  if (result.state === 4) {
    console.log(`Processing...(${retries}/${MAXIMUM_RETRIES})`);

    if (retries >= MAXIMUM_RETRIES) {
      throw new Error("Max retries reached. Please try again later.");
    }

    // wait for 2 second
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return PollForEnhancedImage(taskId, retries + 1);
  }

  console.log("Enhanced Image URL:", result);
  return result;
};

const fetchEnhancedImage = async (taskId) => {
  const { data } = await axios.get(
    `${BASE_URL}/api/tasks/visual/scale/${taskId}`,
    {
      headers: {
        "X-API-KEY": API_KEY,
      },
    }
  );
  if (!data?.data) {
    throw new Error("Failed to fetch enhanced image! Image not found.");
  }

  return data.data;
};

// export default enhancedImageAPI;

// import axios from "axios";
// const API_KEY = "wxuc0mh7mwim4ldto";
// const BASE_URL = "https://techhk.aoscdn.com/api";

// const enhancedImageAPI = async (image) => {
//   try {
//     const taskId = await uploadImage(image);
//     console.log("Uploading image task id: " + taskId);

//     const enhancedImage = await enhancedImagePool(taskId);
//     console.log("Enhanced Image URL: " + enhancedImage.url);
//     return enhancedImage;
//   } catch (error) {
//     console.error("Error occurred while Enhancing image" + error.message);
//   }
// };

// export default enhancedImageAPI;

// const uploadImage = async (image) => {
//   const formData = new FormData();
//   formData.append("image_url", image);

//     const { response } = await axios.post(
//       `${BASE_URL}/api/tasks/visual/scale`,
//       formData,
//       {
//         headers: {
//           "X-API-KEY": API_KEY,
//           "Content-Type": "multipart/form-data",
//         },
//       }
//     );

//     console.log("Upload working fine !!!!!!!!!!!!!");
//     console.log(response.data); // Debugging: Check the API response

//     if (!response.data?.task_id) {
//       throw new Error("Failed to upload Image");
//     }

//     return response.data.task_id;

// };

// const fetchImage = async (taskId) => {
//   try {
//     const { response } = await axios.post(
//       `${BASE_URL}/api/tasks/visual/scale/${taskId}`,
//       {
//         headers: {
//           "X-API-KEY": API_KEY,
//         },
//       }
//     );

//     console.log("Fetch working fine"); // Debugging: Check the API response

//     if (!response.data?.task_id) {
//       throw new Error("Failed to Fetch Image");
//     }

//     return response.data.image;
//   } catch (error) {
//     console.error("Upload failed:", error.response?.data || error.message);
//     throw new Error("Failed to upload Image");
//   }
// };

// const enhancedImagePool = async (taskId, retries = 0) => {
//   const result = fetchImage(taskId);

//   if (result.state === 4) {
//     console.log("Processing");

//     if (retries > 20) {
//       throw new Error("Timeout!! Please Try Again Later");
//     }

//     await new Promise((resolve) => {
//       setTimeout(resolve, 2000);
//     });

//     return enhancedImagePool(taskId, retries + 1);
//   }

//   console.log("Enhanced Image URL" + result);

//   return result;
// };
