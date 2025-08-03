"use server";
import { mkdirSync, writeFileSync, existsSync, readdirSync } from "fs";
import { extname, resolve, join } from "path";
import handleSavingNewImage from "./handle-saving-image";
import handleDeploy from "./handle-auto-deploy";
import clearFolder from "./clear-folder";
const validExt = [".jpg", ".jpeg", ".png", ".webp", ".avif"];
function usePublicImages(folderName) {
  const inputDir = resolve(`src/public/${folderName}`);
  const outputDir = resolve(`src/data/${folderName}`);
  const outputFile = join(outputDir, "index.ts");

  if (!existsSync(inputDir)) {
    throw new Error(`❌ Folderul nu există: ${inputDir}`);
  }

  if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true });
    console.log(`📁 Creat folderul de output: ${outputDir}`);
  }

  const files = readdirSync(inputDir).filter((file) =>
    validExt.includes(extname(file).toLowerCase())
  );

  if (files.length === 0) {
    console.warn(`⚠️ Niciun fișier imagine valid în: ${inputDir}`);
    return;
  }

  const imports = files
    .map((file, i) => {
      const varName = `img${i}`;
      return `import ${varName} from "@/public/${folderName}/${file}";`;
    })
    .join("\n");

  const exportBlock = `
import { StaticImageData } from "next/image";
const bestTattoo = [${files
    .map((_, i) => `img${i}`)
    .join(", ")}] as StaticImageData[];
export default bestTattoo;
`;

  writeFileSync(outputFile, `${imports}\n\n${exportBlock}`);
  console.log(`✅ Fișier generat: ${outputFile}`);
}

async function groupImagesByCollectionFile(folderName) {
  const inputDir = resolve(`src/public/${folderName}`);
  const outputDir = resolve(`src/data/${folderName}`);
  const outputFile = join(outputDir, "index.ts");

  if (!existsSync(inputDir)) {
    throw new Error(`❌ Folderul nu există: ${inputDir}`);
  }

  if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true });
    console.log(`📁 Creat folderul de output: ${outputDir}`);
  }

  const files = readdirSync(inputDir).filter((file) =>
    validExt.includes(extname(file).toLowerCase())
  );

  if (files.length === 0) {
    console.warn(`⚠️ Niciun fișier imagine valid în: ${inputDir}`);
    return;
  }

  // Grupăm imaginile după prefix (ex: flowers---rose.jpg => grup: flowers)
  const groups = {};
  for (const file of files) {
    const [prefix] = file.split("---");
    if (!prefix) continue;
    if (!groups[prefix]) groups[prefix] = [];
    groups[prefix].push(file);
  }

  // Construim importurile și obiectul final
  let importLines = "";
  let imageIndex = 0;
  let objectContent = "const collections = [\n";

  for (const [collectionName, fileList] of Object.entries(groups)) {
    const imageVars = [];

    for (const file of fileList) {
      const varName = `img${imageIndex++}`;
      importLines += `import ${varName} from "@/public/${folderName}/${file}";\n`;
      imageVars.push(varName);
    }

    objectContent += `  {\n    collectionName: "${collectionName}",\n    visible: 3,\n    images: [${imageVars.join(
      ", "
    )}],\n  },\n`;
  }

  objectContent += "] as CollectionEntryType[];\n\nexport default collections;";

  const fullContent = `
import { StaticImageData } from "next/image";

type CollectionEntryType = {
  collectionName: string;
  visible: number;
  images: StaticImageData[];
};

${importLines}

${objectContent}
`;

  writeFileSync(outputFile, fullContent.trim());
  console.log(`✅ Grupare generată: ${outputFile}`);
}

export async function PasswordVerification(input) {
  const password = "parola";
  if (input === password) {
    return true;
  } else {
    return false;
  }
}

export async function handleHomePageChange(imageFile, quote, services) {
  try {
    let usedImage = null;
    // 1. Salvează imaginea cu handleSavingNewImage
    const saveResult = await handleSavingNewImage(
      imageFile,
      "background-images",
      "home-page-background"
    );
    if (saveResult.key !== 200) {
      return saveResult;
    }
    usedImage = saveResult.usedImage.toLowerCase();

    // 2. Creează path-urile
    const dataDir = resolve("src/data/home-page-data");
    const dataFile = join(dataDir, "index.ts");
    if (!existsSync(dataDir)) mkdirSync(dataDir, { recursive: true });

    // 3. Import pentru imaginea nouă
    const imgImportPath = "@/public/background-images/" + usedImage;

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
    // const result = await handleDeploy();
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

// Salvează imaginea și actualizează fișierul QuestionPageData
export async function handleQuestionPageChange(imageFile, questions) {
  try {
    let usedImage = null;
    // 1. Salvează imaginea cu handleSavingNewImage
    const saveResult = await handleSavingNewImage(
      imageFile,
      "background-images",
      "question-page-background"
    );
    if (saveResult.key !== 200) {
      return saveResult;
    }
    usedImage = saveResult.usedImage.toLowerCase();
    // 2. Creează path-urile
    const dataDir = resolve("src/data/question-page-data");
    const dataFile = join(dataDir, "index.ts");
    if (!existsSync(dataDir)) mkdirSync(dataDir, { recursive: true });
    // 3. Import pentru imaginea nouă
    const imgImportPath = "@/public/background-images/" + usedImage;
    // 4. Generează conținutul nou pentru fișierul TypeScript
    const tsContent = [
      'import QuestionPageType from "@/types/question-page-type";',
      `import startingImage from "${imgImportPath}";`,
      "",
      "export const QuestionPageData: QuestionPageType = {",
      "  startingImage: startingImage,",
      `  questions: ${JSON.stringify(questions, null, 2)}`,
      "};",
    ].join("\n");
    // 5. Scrie fișierul
    writeFileSync(dataFile, tsContent);
    // const result = await handleDeploy();
    return {
      key: 200,
      name: "questionpage updated",
      description: `QuestionPageData updated and image saved in background-images`,
    };
  } catch (err) {
    return {
      key: 500,
      name: "error",
      description: `error updating question page: ${err.message}`,
    };
  }
}

export async function handleAboutPageChange(imageFile, about) {
  try {
    let usedImage = null;

    // 1. Salvează imaginea de fundal
    const saveResult = await handleSavingNewImage(
      imageFile,
      "background-images",
      "about-page-background"
    );

    if (saveResult.key !== 200) {
      return saveResult;
    }

    usedImage = saveResult.usedImage.toLowerCase();

    // 2. Creează path-urile
    const dataDir = resolve("src/data/about-page-data");
    const dataFile = join(dataDir, "index.ts");
    if (!existsSync(dataDir)) mkdirSync(dataDir, { recursive: true });

    const imgImportPath = "@/public/background-images/" + usedImage;

    // 3. Salvează imaginile individuale din "about"
    let isImages = [];

    for (const [index, element] of about.entries()) {
      try {
        const deleteResult = await handleSavingNewImage(
          element.image,
          "about-images",
          `${index + 1}-about`,
          element.deleteImage
        );
        console.log(deleteResult);

        isImages.push(deleteResult.key !== 404 && !element.deleteImage);
      } catch (err) {
        console.log("Eroare la salvare imagine:", err);
        isImages.push(false);
      }
    }

    // 4. Construiește importurile
    const lines = [];

    lines.push('import AboutPageType from "@/types/about-page-type";');
    lines.push(`import backgroundImage from "${imgImportPath}";`);

    const imageImports = [];
    const aboutObjects = [];

    about.forEach((entry, index) => {
      const imgIndex = index + 1;
      const imageVar = `img${imgIndex}`;
      let imageRef = "undefined";

      if (isImages[index]) {
        const ext = entry.image?.name?.split(".").pop()?.toLowerCase(); // fallback pentru extensie
        const imageImportPath = `@/public/about-images/${imgIndex}-about.${ext}`;
        lines.push(`import ${imageVar} from "${imageImportPath}";`);
        imageRef = imageVar;
      }

      const aboutItem = `{
        image: ${imageRef},
        titleRO: ${JSON.stringify(entry.titleRO)},
        titleEN: ${JSON.stringify(entry.titleEN)},
        descriptionRO: ${JSON.stringify(entry.descriptionRO)},
        descriptionEN: ${JSON.stringify(entry.descriptionEN)},
        revers: ${entry.revers}
      }`;
      aboutObjects.push(aboutItem);
    });

    // 5. Construiește conținutul TypeScript
    lines.push("");
    lines.push("const AboutPageData: AboutPageType = {");
    lines.push("  backgroundImage: backgroundImage,");
    lines.push("  about: [");
    lines.push(aboutObjects.map((obj) => `    ${obj}`).join(",\n"));
    lines.push("  ],");
    lines.push("};");
    lines.push("");
    lines.push("export default AboutPageData;");

    // 6. Scrie fișierul
    const tsContent = lines.join("\n");
    writeFileSync(dataFile, tsContent);

    return {
      key: 200,
      name: "ok",
      description: "about page updated",
    };
  } catch (err) {
    return {
      key: 500,
      name: "error",
      description: `error updating about page: ${err.message}`,
    };
  }
}

export async function handleText(textArray, folderName) {
  const folderPath = path.join(process.cwd(), "src", "data", folderName);

  // Creează folderul dacă nu există
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }

  // Structura obiectului
  const textObject = {
    text: textArray,
  };

  // Conținutul fișierului ca string
  const fileContent = `const bestTattooText = ${JSON.stringify(
    textObject,
    null,
    2
  )};\n\nexport default bestTattooText;\n`;

  // Scrie fișierul în folder
  const filePath = path.join(folderPath, "index.ts"); // sau `.js` dacă preferi JS
  fs.writeFileSync(filePath, fileContent, "utf-8");

  console.log(`✅ Fișier creat: ${filePath}`);
}

export async function handleBestTattoo(imagesPath, folderName) {
  if (imagesPath.length == 0) {
    const error = {
      key: 400,
      name: "no files",
      description: `In the ${folderName}, the folder has 0 files`,
    };
    console.log(error);
    return error;
  }
  try {
    const result = await clearFolder(`src/public/${folderName}`);
    if (result.key == 200) {
      imagesPath.forEach(async (image) => {
        try {
          const imageResult = await handleSavingNewImage(
            image,
            folderName,
            image.name
          );
          if (imageResult.key != 200) return imageResult;
        } catch (error) {
          console.log(error);
        }
      });
    } else {
      return result;
    }
  } catch (err) {
    console.log(err);
  }

  usePublicImages(folderName);

  return {
    key: 200,
    name: "images was saved successfuly",
    description: `All images was saved in src/public/${folderName} successfuly`,
  };
}

export async function handleColectionTattoo(
  nameArray,
  imageArray,
  isFolderDeleted = false
) {
  const targetDir = path.join(
    process.cwd(),
    "src",
    "public",
    "tattoo-collection"
  );

  // Creează folderul dacă nu există
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }
  if (isFolderDeleted) await clearFolder("src/public/tattoo-collection");
  for (let i = 0; i < nameArray.length; i++) {
    const prefix = nameArray;
    const fileList = imageArray;
    console.log(fileList);

    for (const file of fileList) {
      // Verificăm că e tip File (de la <input type="file">)
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      const originalName = file.name;
      const newFileName = `${prefix}---${originalName}`;
      const savePath = path.join(targetDir, newFileName);

      fs.writeFileSync(savePath, buffer);
    }
  }
  await groupImagesByCollectionFile("tattoo-collection");
  console.log("✅ Imaginile au fost salvate în src/public/colection-tattoo");
}
