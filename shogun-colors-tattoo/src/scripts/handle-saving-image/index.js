import { mkdirSync, writeFileSync, existsSync } from "fs";
import { extname, resolve, join } from "path";
async function handleSavingNewImage(
  imageFile,
  folderName,
  imageName,
  onDelete = false
) {
  console.log(onDelete);
  if (!onDelete) {
    try {
      const publicDir = resolve("src/public", folderName);
      let usedImage = null;
      if (imageFile !== null && imageFile !== undefined) {
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
        usedImage = newImageName;
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
          console.log(
            "No existing " + imageName + " image found in " + folderName
          );
          return {
            key: 404,
            name: "image not found",
            description: `the image was not added in the ${publicDir}`,
            usedImage,
          };
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
  } else {
    // Șterge imaginea cu numele imageName din folderul folderName
    try {
      const publicDir = resolve("src/public", folderName);
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
      console.log("------------a ajuns sa sterga", found);
      if (found) {
        const imagePath = join(publicDir, found);
        try {
          fs.unlinkSync(imagePath);
          console.log("Deleted image:", imagePath);
          return {
            key: 200,
            name: "image deleted",
            description: `Image ${found} deleted from ${publicDir}`,
          };
        } catch (e) {
          console.log("Failed to delete image:", imagePath, e);
          return {
            key: 500,
            name: "error",
            description: "Failed to delete image: " + e.message,
          };
        }
      } else {
        return {
          key: 404,
          name: "not found",
          description: `No image named ${imageName} found in ${publicDir}`,
        };
      }
    } catch (err) {
      return {
        key: 500,
        name: "error",
        description: "Error deleting image: " + err.message,
      };
    }
  }
}
export default handleSavingNewImage;
