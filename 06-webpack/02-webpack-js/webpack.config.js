module.exports = {
   entry: `./src/js/script.js`,
   output: {
       path: require('path').resolve(`./dist/bundled/js`),
       filename: `script.js`,
   }
};

