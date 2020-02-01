const helper = require("../helper");
const assert = require("assert");
const readline = require("readline");

// *** test jest
// describe("testing the test case setup", () => {
//   it("should print the correct init message", async () => {
//     // const response = await helper.create("../bin/run").execute();
//     // console.log(response);
//     const response = await helper.create().execute();

//     // mocha
//     assert.equal(response.trim(), "Hello World");

//     // jest
//     // expect(response.trim()).toMatch("123");
//   });
// });

const child_process = require("child_process");

describe("execute functional test with file input", done => {
  it("should echo the test command", async () => {
    const procFile = child_process.fork(
      "../bin/execute",
      ["../fixtures/testinput.txt"],
      { stdio: ["pipe", "pipe", "pipe", "ipc"] }
    );

    procFile.stdout.on("data", text => {
      console.log("procFile stdout data", text.toString().trim());
      assert.equal(text.toString().trim(), "Hello World!!");
      // done();
    });
  });
});

// describe("testing the test case setup", done => {
//   it("should print the correct init message", async () => {
//     const procCLI = child_process.exec("../bin/execute", [], null);
//     procCLI.stdin.setEncoding("utf-8");
//     procCLI.stdout.pipe(process.stdout);

//     // procCLI.on("message", data => {
//     //   console.log("message from child process:", data);
//     // });

//     procCLI.stdout.on("data", text => {
//       console.log("procCLI stdout data", text);
//       assert.equal(response.trim(), "Hello World");
//       done();
//     });

//     const readlineCLI = readline.createInterface({
//       input: process.stdout
//       // output: process.stdout
//     });

//     // event is emitted after each line
//     readlineCLI.on("line", function(line) {
//       console.log("CLI process read: ", line);
//     });

//     // end
//     readlineCLI.on("close", function(line) {
//       console.log("end of CLI process");
//     });
//   });
// });
