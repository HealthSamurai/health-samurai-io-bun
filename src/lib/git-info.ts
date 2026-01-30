// Git info - populated at server startup

import { $ } from "bun";

export const gitInfo = {
  branch: "",
  commit: "",
  shortCommit: "",
};

// Initialize git info (call once at startup)
export async function initGitInfo() {
  try {
    const branch = await $`git rev-parse --abbrev-ref HEAD`.text();
    const commit = await $`git rev-parse HEAD`.text();

    gitInfo.branch = branch.trim();
    gitInfo.commit = commit.trim();
    gitInfo.shortCommit = gitInfo.commit.slice(0, 7);
  } catch (e) {
    console.error("Failed to get git info:", e);
  }
}
