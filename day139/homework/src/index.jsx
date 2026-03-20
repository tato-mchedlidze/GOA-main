import os from "os";

// hw2
console.log("OS Platform (process):", process.platform);

// hw3
console.log("OS Platform again:", process.platform);

// hw4
console.log("Command-line arguments:");
process.argv.forEach((arg) => {
  console.log(arg);
});

// hw5
console.log("OS Name:", os.type());
console.log("OS Version:", os.release());

// hw6
console.log("Total Memory:", os.totalmem());
console.log("Free Memory:", os.freemem());

// hw7
console.log("Home Directory:", os.homedir());

// hw8
console.log("System Uptime (seconds):", os.uptime());

// hw9
console.log("This is a normal message");
console.warn("This is a warning message");
console.error("This is an error message");

// hw10
const systemInfo = {
  platform: os.platform(),
  hostname: os.hostname(),
  cpuCount: os.cpus().length,
  uptime: os.uptime(),
};

console.table(systemInfo);
