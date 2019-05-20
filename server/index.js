require("@babel/register")({
  presets: ["@babel/env"],
  extensions: [".js", ".ts"]
});

module.exports = require("./app/server.ts");
