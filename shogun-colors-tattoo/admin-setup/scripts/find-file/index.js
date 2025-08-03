const fs = require("fs");
const path = require("path");

/**
 * Caută un fișier într-un folder, indiferent de extensie.
 * @param {string} dirPath - Calea către director (ex: "src/public").
 * @param {string} fileName - Numele fișierului fără extensie (ex: "imageFile").
 * @returns {string|false} - Returnează numele fișierului cu extensie dacă este găsit, altfel false.
 */
function findFile(dirPath, fileName) {
  if (!fs.existsSync(dirPath)) return false;

  const files = fs.readdirSync(dirPath);

  for (const file of files) {
    const parsed = path.parse(file);
    if (parsed.name === fileName) {
      return file; // returnează fișierul cu extensia găsită
    }
  }

  return false;
}

// Exemplu de utilizare:
const result = findFile("src/public", "imageFile");
console.log(result); // ex: "imageFile.png" sau false
