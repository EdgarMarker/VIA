const Image = require("@11ty/eleventy-img");

async function processImages(imageData) {
  if (!imageData || !imageData.url) {
    console.log("No image data or URL found.");
    return null;
  }

  let metadata;
  try {
    //console.log("Processing image:", imageData.url); // Verifica que esta línea se imprima
    metadata = await Image(imageData.url, {
      widths: [300, 600, 900, 1200, 1800],
      formats: ["jpeg", "webp"],
      urlPath: "/images/",
      outputDir: "./public/images/",
    });
    //console.log("Generated image metadata:", metadata); // Verifica que se imprima la metadata
  } catch (error) {
    //console.error("Error processing image:", error);
    return null;
  }
  return metadata;
}

module.exports = processImages;