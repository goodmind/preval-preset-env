module.exports = function(api) {
  api.cache(false);
  return {
    presets: [
      "@babel/preset-react",
      [
        "@babel/preset-env",
        {
          useBuiltIns: "usage",
          shippedProposals: true,
          modules: false,
          targets: {
            browsers: ["last 2 versions"]
          }
        }
      ]
    ],
    plugins: ["preval"]
  };
};
