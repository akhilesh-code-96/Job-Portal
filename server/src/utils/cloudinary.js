import { v2 as cloudinary } from "cloudinary";

export default async function uploadFileToCloudinary(
  filePath,
  isDocument = false
) {
  // Configuration
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

  // Determine the resource type
  const resourceType = isDocument ? "raw" : "image";

  // Upload the file
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      public_id: `${Math.floor(Math.random() * 100 + 1)}`,
      resource_type: resourceType,
    });
    return result;
  } catch (error) {
    console.error("Cloudinary upload failed with error: " + error);
    throw error;
  }
}
