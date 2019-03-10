const helper = require("./helper");

describe("The pizza CLI", () => {
  it("should print the correct error", async () => {
    try {
      const response = await helper.create("../bin/run").execute();
      console.log(response);
      expect(response).toEqual("Hello World");
    } catch (err) {
      console.log(err);
    }
  });
});
