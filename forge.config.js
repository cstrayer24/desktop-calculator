module.exports = {
  packagerConfig: {
    icon: "/images/calc_icon.png",
  },
  rebuildConfig: {},
  makers: [
    {
      name: "@electron-forge/maker-squirrel",
      config: {
        authors: "Alice and Bob",
        description: "An example Electron app",
      },
    },
    {
      name: "@electron-forge/maker-zip",
      platforms: ["darwin", "squirrel", "linux"],
    },
    {
      name: "@electron-forge/maker-deb",
      config: {},
    },
    {
      name: "@electron-forge/maker-rpm",
      config: {},
    },
  ],
};
