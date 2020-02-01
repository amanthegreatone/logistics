const controlPanel = require("../lib/controlPanel");
const fs = require("fs");
const readline = require("readline");

const execute = (args = null) => {
  if (args && fs.existsSync(args)) {
    // file input given
    // console.log("Starting File Input Mode");

    // read file line by line
    const readLineFile = readline.createInterface({
      input: fs.createReadStream(args)
    });

    // event is emitted after each line
    readLineFile.on("line", function(line) {
      console.log(line);
    });

    // end
    readLineFile.on("close", function(line) {
      // console.log("end of input file");
    });
  } else {
    // no file input given
    console.log("Starting Interactive Mode");

    // read commands from cli

    // process.stdin.on("data", data => {
    //   console.log("CLI input data: ", data);
    // });

    // process.on("message", data => {
    //   console.log("input from ipc: ", data);
    // });

    const readlineCLI = readline.createInterface({
      input: process.stdin
      // output: process.stdout
    });

    // event is emitted after each line
    readlineCLI.on("line", function(line) {
      console.log("CLI input read: ", line);
      // process.send("input read: " + line);
    });

    // end
    readlineCLI.on("close", function(line) {
      console.log("end of CLI input");
    });
  }
};

// const execute = (args = null) => {
//   console.log(args);
// };

module.exports = { execute };
