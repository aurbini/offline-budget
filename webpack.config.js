const WebpackPwaManifest = require("webpack-pwa-manifest");


const path = require("path");

const config = {
  // Update the entry point
  entry: "./public/index.js",
  output: {
    // Set the path and filename for the output bundle (hint: You will need to use "__dirname")
    path: __dirname + "/public/dist",
    filename: "bundle.js"
  },
  mode: "production",
  plugins: [
    new WebpackPwaManifest({
      fingerprints: false, 
      name: 'My Progressive Web App',
      short_name: 'MyPWA',
      description: 'My awesome Progressive Web App!',
      background_color: '#ffffff',
      crossorigin: 'use-credentials', //can be null, use-credentials or anonymous
      icons: [
        {
          src: path.resolve('public/icons/icon-192x192.png'),
          size: '192x192', 
          type: "image/png"
        }
      ]
    })
  ]
};

module.exports = config;
