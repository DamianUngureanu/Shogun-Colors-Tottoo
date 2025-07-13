"use server";
import { mkdirSync, writeFileSync, existsSync } from "fs";
import { extname, resolve, join } from "path";
import { File } from "buffer"; // doar dacă rulezi în context Node cu tipuri File, altfel folosește `Buffer`

import { execSync } from "child_process";
export async function PasswordVerification(input) {
  const password = "parola";
  if (input === password) {
    return true;
  } else {
    return false;
  }
}

export async function handleDeploy(commitMessage = "Auto deploy") {
  try {
    const parentRepoPath = "A:GIT-ProjectsShogun-Colors-Tottoo"; // înlocuiește cu calea corectă către repo-ul mare
    execSync("git add .", { stdio: "inherit", cwd: parentRepoPath });
    execSync(`git commit -m "${commitMessage}"`, {
      stdio: "inherit",
      cwd: parentRepoPath,
    });
    execSync("git push", { stdio: "inherit", cwd: parentRepoPath });
    return {
      key: 200,
      name: "deploy",
      description:
        "Git add, commit și push efectuate cu succes în repo-ul părinte.",
    };
  } catch (err) {
    return {
      key: 500,
      name: "error",
      description: "Eroare la deploy: " + err.message,
    };
  }
}
async function handleSavingNewImage(imageFile, folderName, imageName) {
  try {
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

    return {
      key: 200,
      name: "image added",
      description: `the image was added successfully in the ${publicDir}`,
      newImageName,
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

// Salvează imaginea și actualizează fișierul HomePageData
export async function handleHomePageChange(imageFile, quote, services) {
  try {
    let usedImageExt = null;
    if (imageFile !== null) {
      // 1. Salvează imaginea cu handleSavingNewImage
      const saveResult = await handleSavingNewImage(
        imageFile,
        "background-images",
        "home-page-background"
      );
      if (saveResult.key !== 200) {
        return saveResult;
      }
      usedImageExt = extname(imageFile.name).toLowerCase();
    } else {
      // Caută imaginea existentă cu orice extensie
      const fs = require("fs");
      const publicDir = resolve("src/public/background-images");
      const files = fs.readdirSync(publicDir);
      const regex = /^home-page-background(\.[a-zA-Z0-9]+)?$/i;
      const found = files.find((f) => regex.test(f));
      if (found) {
        usedImageExt = extname(found).toLowerCase();
        // Nu putem crea un File real, dar putem folosi extensia pentru import
        console.log("Found existing image:", found);
      } else {
        throw new Error(
          "No existing home-page-background image found in background-images"
        );
      }
    }

    // 2. Creează path-urile
    const dataDir = resolve("src/data/home-page-data");
    const dataFile = join(dataDir, "index.ts");
    if (!existsSync(dataDir)) mkdirSync(dataDir, { recursive: true });

    // 3. Import pentru imaginea nouă
    const imgImportPath =
      "@/public/background-images/home-page-background" + usedImageExt;

    // 4. Generează conținutul nou pentru fișierul TypeScript (fără escape la backtick)
    const tsContent = [
      `import startImage from "${imgImportPath}";`,
      'import HomePageType from "@/types/home-page-type";',
      "",
      "export const HomePageData: HomePageType = {",
      "  startImage: startImage,",
      `  quote: ${JSON.stringify(quote)},`,
      `  services: ${JSON.stringify(services, null, 2)}`,
      "};",
    ].join("\n");

    // 5. Scrie fișierul
    writeFileSync(dataFile, tsContent);
    console.log(handleDeploy);
    return {
      key: 200,
      name: "homepage updated",
      description: `HomePageData updated and image saved in background-images`,
    };
  } catch (err) {
    return {
      key: 500,
      name: "error",
      description: `error updating homepage: \${err.message}`,
    };
  }
}
