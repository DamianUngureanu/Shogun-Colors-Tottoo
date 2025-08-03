import { resolve } from "path";
import { execSync } from "child_process";
async function handleDeploy(commitMessage = "Auto deploy") {
  try {
    // Calea absolută către repo-ul părinte (ajustează dacă e nevoie)
    const parentRepoPath = resolve("A:/GIT-Projects/Shogun-Colors-Tottoo"); // sau pune calea absolută: 'A:/GIT-Projects/Shogun-Colors-Tottoo'
    console.log("[handleDeploy] Folosesc cwd:", parentRepoPath);
    execSync("git add .", { stdio: "inherit", cwd: parentRepoPath });
    execSync(`git commit -m "${commitMessage}"`, {
      stdio: "inherit",
      cwd: parentRepoPath,
    });
    try {
      execSync("git push", { cwd: parentRepoPath }); // stdio default: 'pipe', ca să capturăm outputul
    } catch (pushErr) {
      const msg =
        (pushErr.message || "") +
        (pushErr.stderr ? pushErr.stderr.toString() : "");
      if (msg.includes("rejected") || msg.includes("fetch first")) {
        console.warn(
          "[handleDeploy] Push rejected, încerc git pull --rebase..."
        );
        execSync("git pull --rebase", {
          stdio: "inherit",
          cwd: parentRepoPath,
        });
        execSync("git push", { stdio: "inherit", cwd: parentRepoPath });
      } else {
        throw pushErr;
      }
    }
    return {
      key: 200,
      name: "deploy",
      description:
        "Git add, commit și push efectuate cu succes în repo-ul părinte.",
    };
  } catch (err) {
    console.error("[handleDeploy] Eroare la deploy:", err);
    return {
      key: 500,
      name: "error",
      description:
        "Eroare la deploy: " +
        (err.stderr ? err.stderr.toString() : err.message),
    };
  }
}
export default handleDeploy;
