var fs = require("fs");
var Seneca = require("seneca");

fs.readFile("./dummy.jpg", (err, data) => {
  if (err) throw err;

  Seneca()
    .client()
    .act(
      {
        role: "app",
        cmd: "upload",
        data: data.toString("base64"),
        filename: `${Date.now()}.jpg`,
      },
      (err, result) => {
        if (err) throw err;

        console.log("-------------");
        console.log("> result:", result);
        console.log("-------------");
      }
    );
});
