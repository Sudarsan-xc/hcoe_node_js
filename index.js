const http = require("http");
const os = require("os");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    //calculate your RAM
    const myRAM = os.totalmem().toFixed(2);
    const toogb = myRAM / (1024 * 1024 * 1024);
    res.end(
      JSON.stringify({
        data: toogb + "Gb",
      })
    );
  })
  .listen(8800);
//hw
