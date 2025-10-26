// module.exports = {
//   branches: "workflow",
//   repositoryUrl: "https://github.com/mesxi1/react-app",
//   plugins: [
//     "@semantic-release/commit-analyzer",
//     "@semantic-release/release-notes-generator",
//     "@semantic-release/github"
//     // [
//     //   "@semantic-release/github"
//     //   // {
//     //   //   assets: [
//     //   //     { path: "build.zip", label: "Build" },
//     //   //     { path: "coverage.zip", label: "Coverage" }
//     //   //   ]
//     //   // }
//     // ]
//   ]
// }
    module.exports = {
      branches: ['workflow'], // Or your main release branch
      plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        '@semantic-release/changelog',
        '@semantic-release/npm', // If publishing to npm
        '@semantic-release/git',
        '@semantic-release/github',
      ],
    };