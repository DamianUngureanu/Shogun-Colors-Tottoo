const fs = require("fs");
const path = require("path");

/**
 * Șterge tot conținutul (fișiere și subfoldere) dintr-un folder.
 * @param {string} folderPath - Calea absolută sau relativă a folderului de golit
 */
async function clearFolder(folderPath, deleteFolder = false) {
  const parentPath = path.dirname(folderPath);
  if (!fs.existsSync(parentPath)) {
    return {
      key: 404,
      name: "incorrect path",
      description: `Not found ${parentPath} from original path`,
    };
  }
  if (!fs.existsSync(folderPath)) {
    console.warn(`Folderul nu există: ${folderPath}`);
    if (deleteFolder) {
      fs.mkdirSync(folderPath);
      return {
        key: 200,
        name: "folder created",
        description: `Create folder ${folderPath}`,
      };
    } else {
      return {
        key: 200,
        name: "folder deleted",
        description: `Folder ${folderPath} was deleted!`,
      };
    }
  }

  const items = fs.readdirSync(folderPath);

  for (const item of items) {
    const fullPath = path.join(folderPath, item);
    const stat = fs.lstatSync(fullPath);

    if (stat.isDirectory()) {
      // Recursiv pentru subfoldere
      emptyFolder(fullPath);
      fs.rmdirSync(fullPath);
    } else {
      fs.unlinkSync(fullPath); // Șterge fișierul
    }
  }
  return {
    key: 200,
    name: "folder cleared",
    description: `The folder ${folderPath} is empty now`,
  };
}
export default clearFolder;
