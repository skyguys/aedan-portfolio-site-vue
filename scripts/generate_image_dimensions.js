
import matter from 'gray-matter'; // For reading markdown
import fs from 'fs';              // File stuff
import path from 'path';          // Path stuff
import { loadImage } from 'canvas';

const directoryPath = import.meta.dirname
const targetDir = path.resolve(directoryPath, "../content/photography"); 
// TODO: Make this not hard-coded in case we want to add more to other sites.

fs.readdir(targetDir, (err, entries) => {
  checkForErrorWhenReadingDirectory(err, targetDir);

  for (let i = 0; i < entries.length; i++){
    const entry = entries[i];

    if (path.extname(entry) !== ".md") {
      continue;
    }

    const markdownFilePath = path.resolve(targetDir, entry);
    const jsonFilePath = path.resolve(targetDir, path.parse(entry).name + ".json");

    try {
      const markdownFileContent = fs.readFileSync(markdownFilePath, 'utf8');
      const { data, _ } = matter(markdownFileContent);

      generateImageDimensionsJSON(data.image_path, jsonFilePath)

    } catch (err) {
      console.error(err);
    }
  }
});

function checkForErrorWhenReadingDirectory(err, filepath){
  if (err) {
    console.error("Error reading/writing directory " + filepath + ":", err);
    process.exit(1); // Stop generation
  }
}

function generateImageDimensionsJSON(imagePathFromMarkdownFile, jsonFilePath){
  const resolvedImageFilePath = path.resolve(directoryPath, "../public" + imagePathFromMarkdownFile);

  console.log("Reading " + resolvedImageFilePath);

  fs.readdir(resolvedImageFilePath, (err, entries) => {
    checkForErrorWhenReadingDirectory(err, resolvedImageFilePath);

    loadAllImages(entries, resolvedImageFilePath, imagePathFromMarkdownFile).then(images => {

      const writeObject = {"data": images}
      fs.writeFile(jsonFilePath, JSON.stringify(writeObject), err => {
        checkForErrorWhenReadingDirectory(err, jsonFilePath);
      });

    })
  });
}

async function loadAllImages(entries, resolvedImageFilePath, imagePathFromMarkdownFile){
  const images = []

  for (let i = 0; i < entries.length; i++){

    const image = entries[i];
    const imageFilePath = path.resolve(resolvedImageFilePath, image);
    const relativeImageFilePathFromPublic = path.resolve(imagePathFromMarkdownFile, image);
    console.log("Processing " + imageFilePath);

    try {
      const imageData = await getImageData(imageFilePath, relativeImageFilePathFromPublic);
      images.push(imageData);
    } catch (err) {
      console.error(err);
      process.exit(1);
    }
  }

  console.log(images);

  return images;
}

async function getImageData(imageFilePath, relativeFilePathFromPublic){
  const myImage = await loadImage(imageFilePath);

  const imageData = {
    "src": relativeFilePathFromPublic,
    "width": myImage.width,
    "height": myImage.height,
    "ratio": myImage.width / myImage.height
  }

  // console.log(imageData)
  return imageData;
}
