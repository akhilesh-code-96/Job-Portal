import multer from "multer";

const storageConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    const fileType = file.mimetype.split("/")[0];
    let folder;
    if (fileType === "image") {
      folder = "public/images";
    } else if (fileType === "application") {
      folder = "public/resumes";
    }
    cb(null, folder);
  },
  filename: (req, file, cb) => {
    const name = Date.now() + "-" + file.originalname;
    cb(null, name);
  },
});

export const uploadFile = multer({
  storage: storageConfig,
  fileFilter: (req, file, cb) => {
    // Restrict file types
    const allowedMimeTypes = [
      "image/jpeg",
      "image/png",
      "application/pdf",
      "application/msword",
    ];
    if (allowedMimeTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(
        new Error("Invalid file type. Only images and resumes are allowed."),
        false
      );
    }
  },
});
