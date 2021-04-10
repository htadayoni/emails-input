const path = require("path");

module.exports = {
  root: path.resolve(__dirname, "../"),
  outputPath: path.resolve(__dirname, "../", "dist"),
  entryPath: path.resolve(__dirname, "../", "src/index.js"),
  templatePath: path.resolve(__dirname, "../", "static/index.html"),
  demoPath: path.resolve(__dirname, "../", "demo/index.html"),
  templateStylePath: path.resolve(__dirname, "../", "static/style.css")
};
