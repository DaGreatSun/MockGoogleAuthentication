import fs from "fs";

export const saveFile = async (file, filePath) => {
  const data = fs.readFileSync(file.filepath);
  fs.writeFileSync(filePath, data);
  fs.unlinkSync(file.filepath);
  return;
};

export async function createFolder(path) {
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path, { recursive: true });
  }
}

export async function getFileFormat(file) {
  return file.mimetype.substring(file.mimetype.indexOf("/") + 1);
}

export const deleteFile = async (filePath) => {
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
  }
  return;
};

export function getFormattedFileName(originalFilename) {
  var format = originalFilename.substring(
    originalFilename.lastIndexOf(".") + 1,
  );
  var name =
    originalFilename.substring(0, originalFilename.lastIndexOf(".")) +
    "_" +
    new Date().getTime() +
    "." +
    format;

  return { fileName: name, fileFormat: format };
}

export default {
  saveFile,
  createFolder,
  getFileFormat,
  deleteFile,
  getFormattedFileName,
};
