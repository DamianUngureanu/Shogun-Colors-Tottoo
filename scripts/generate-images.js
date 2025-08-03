// import { readdirSync, mkdirSync, writeFileSync, existsSync } from "fs";
// import { join, extname, resolve } from "path";

// const validExt = [".jpg", ".jpeg", ".png", ".webp", ".avif"];
// function usePublicImages(folderName) {
//   const inputDir = resolve(`src/public/${folderName}`);
//   const outputDir = resolve(`src/data/${folderName}`);
//   const outputFile = join(outputDir, "index.ts");

//   if (!existsSync(inputDir)) {
//     throw new Error(`❌ Folderul nu există: ${inputDir}`);
//   }

//   if (!existsSync(outputDir)) {
//     mkdirSync(outputDir, { recursive: true });
//     console.log(`📁 Creat folderul de output: ${outputDir}`);
//   }

//   const files = readdirSync(inputDir).filter((file) =>
//     validExt.includes(extname(file).toLowerCase())
//   );

//   if (files.length === 0) {
//     console.warn(`⚠️ Niciun fișier imagine valid în: ${inputDir}`);
//     return;
//   }

//   const imports = files
//     .map((file, i) => {
//       const varName = `img${i}`;
//       return `import ${varName} from "@/public/${folderName}/${file}";`;
//     })
//     .join("\n");

//   const exportBlock = `
// import { StaticImageData } from "next/image";
// const bestTattoo = [${files
//     .map((_, i) => `img${i}`)
//     .join(", ")}] as StaticImageData[];
// export default bestTattoo;
// `;

//   writeFileSync(outputFile, `${imports}\n\n${exportBlock}`);
//   console.log(`✅ Fișier generat: ${outputFile}`);
// }

// function groupImagesByCollectionFile(folderName) {
//   const inputDir = resolve(`src/public/${folderName}`);
//   const outputDir = resolve(`src/data/${folderName}`);
//   const outputFile = join(outputDir, "index.ts");

//   if (!existsSync(inputDir)) {
//     throw new Error(`❌ Folderul nu există: ${inputDir}`);
//   }

//   if (!existsSync(outputDir)) {
//     mkdirSync(outputDir, { recursive: true });
//     console.log(`📁 Creat folderul de output: ${outputDir}`);
//   }

//   const files = readdirSync(inputDir).filter((file) =>
//     validExt.includes(extname(file).toLowerCase())
//   );

//   if (files.length === 0) {
//     console.warn(`⚠️ Niciun fișier imagine valid în: ${inputDir}`);
//     return;
//   }

//   // Grupăm imaginile după prefix (ex: flowers---rose.jpg => grup: flowers)
//   const groups = {};
//   for (const file of files) {
//     const [prefix] = file.split("---");
//     if (!prefix) continue;
//     if (!groups[prefix]) groups[prefix] = [];
//     groups[prefix].push(file);
//   }

//   // Construim importurile și obiectul final
//   let importLines = "";
//   let imageIndex = 0;
//   let objectContent = "const collections = [\n";

//   for (const [collectionName, fileList] of Object.entries(groups)) {
//     const imageVars = [];

//     for (const file of fileList) {
//       const varName = `img${imageIndex++}`;
//       importLines += `import ${varName} from "@/public/${folderName}/${file}";\n`;
//       imageVars.push(varName);
//     }

//     objectContent += `  {\n    collectionName: "${collectionName}",\n    visible: 3,\n    images: [${imageVars.join(
//       ", "
//     )}],\n  },\n`;
//   }

//   objectContent += "] as CollectionEntryType[];\n\nexport default collections;";

//   const fullContent = `
// import { StaticImageData } from "next/image";

// type CollectionEntryType = {
//   collectionName: string;
//   visible: number;
//   images: StaticImageData[];
// };

// ${importLines}

// ${objectContent}
// `;

//   writeFileSync(outputFile, fullContent.trim());
//   console.log(`✅ Grupare generată: ${outputFile}`);
// }
// usePublicImages("best-tattoo");
// groupImagesByCollectionFile("tattoo-collection");
// usePublicImages("other-tattoo");
