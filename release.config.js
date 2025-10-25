module.exports = {
  branches: "main",
  repositoryUrl: "https://github.com/mesxi1/react-app",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/github"
    // [
    //   "@semantic-release/github"
    //   {
    //     assets: [
    //       { path: "build.zip", label: "Build" },
    //       { path: "coverage.zip", label: "Coverage" }
    //     ]
    //   }
    // ]
  ]
}
