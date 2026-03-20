// cw1
console.log("File absolute path:");
console.log(process.argv[1]);

// cw2
import os from "os";

const info = {
  uptime: os.uptime(),
  operatingSystem: os.platform(),
  hostname: os.hostname(),
  fileAbsolutePath: process.argv[1],
  networkInterfaces: os.networkInterfaces(),
};

console.log(info);
