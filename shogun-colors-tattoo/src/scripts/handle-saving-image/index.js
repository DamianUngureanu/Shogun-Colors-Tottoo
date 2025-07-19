import { mkdirSync, writeFileSync, existsSync } from "fs";
import { extname, resolve, join } from "path";
async function handleSavingNewImage(imageFile, folderName, imageName) {
  try {
    const publicDir = resolve("src/public/background-images");
    let usedImage = null;
    if (imageFile !== null) {
      const publicDir = resolve("src/public", folderName);
      if (!existsSync(publicDir)) {
        mkdirSync(publicDir, { recursive: true });
        console.log("Created directory:", publicDir);
      }

      const ext = extname(imageFile.name).toLowerCase();
      let newImageName = imageFile.name;
      let oldImagePath = null;

      if (imageName) {
        // Caută orice fișier cu numele imageName și orice extensie
        const fs = require("fs");
        const files = fs.readdirSync(publicDir);
        const regex = new RegExp(
          `^${imageName.replace(
            /[-/\\^$*+?.()|[\]{}]/g,
            "\\$&"
          )}(\.[a-zA-Z0-9]+)?$`,
          "i"
        );
        const found = files.find((f) => regex.test(f));
        if (found) {
          oldImagePath = join(publicDir, found);
          try {
            fs.unlinkSync(oldImagePath);
            console.log("Deleted old image:", oldImagePath);
          } catch (e) {
            console.log("Failed to delete old image:", oldImagePath, e);
          }
        } else {
          console.log("No old image found for:", imageName);
        }
        // Numele imaginii noi va fi imageName + extensia imaginii noi
        newImageName = imageName + ext;
      }
      const newImagePath = join(publicDir, newImageName);
      console.log("Saving new image as:", newImagePath);

      // Salvează imaginea nouă
      const arrayBuffer = await imageFile.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      writeFileSync(newImagePath, buffer);
      console.log("Image written to disk:", newImagePath);
      usedImage = newImagePath;
    } else {
      const fs = require("fs");
      const files = fs.readdirSync(publicDir);
      const regex = new RegExp(
        `^${imageName.replace(
          /[-/\\^$*+?.()|[\]{}]/g,
          "\\$&"
        )}(\\.[a-zA-Z0-9]+)?$`,
        "i"
      );
      const found = files.find((f) => regex.test(f));
      if (found) {
        usedImage = found.toLowerCase();
        // Nu putem crea un File real, dar putem folosi extensia pentru import
        console.log("Found existing image:", found);
      } else {
        throw new Error(
          "No existing home-page-background image found in background-images"
        );
      }
    }
    return {
      key: 200,
      name: "image added",
      description: `the image was added successfully in the ${publicDir}`,
      usedImage,
    };
  } catch (err) {
    console.log("Error saving image:", err);
    return {
      key: 500,
      name: "error",
      description: `error saving image: ${err.message}`,
    };
  }
}
export default handleSavingNewImage;
