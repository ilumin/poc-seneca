var fs = require("fs");
var Seneca = require("seneca");

function uploader() {
  this.add("role:app,cmd:upload", function (msg, respond) {
    var data = msg.data;
    var filename = msg.filename;

    var filepath = "./temp/" + filename;

    console.log("> got:", filename);
    console.log("> got:", data);

    fs.writeFile(filepath, data, "base64", function (err) {
      if (err) {
        console.log("> error", err);
        return respond(err, { ok: false });
      }
      respond(null, { ok: true });
    });
  });
}

Seneca().use(uploader).listen();
