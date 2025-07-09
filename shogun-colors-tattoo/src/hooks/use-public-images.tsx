import { readdirSync, mkdirSync, writeFileSync, existsSync } from "fs";
import { StaticImageData } from "next/image";
import { join, extname, resolve } from "path";

/**
 * Generează un fișier TS care importă toate imaginile dintr-un folder public
 * și exportă un array tip StaticImageData.
 *
 * @param folderName ex: "cats", "dogs"
 */
export function usePublicImages(folderName: string) {
  const validExt = [".jpg", ".jpeg", ".png", ".webp", ".avif"];

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
