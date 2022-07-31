const fs = require("fs");

const first = fs.readFileSync("./folder1/first.txt", "utf-8");
const second = fs.readFileSync("./folder1/second.txt", "utf-8");
const write = fs.readFileSync("./folder1/write-text.txt", "utf-8");

fs.writeFileSync(
  `./folder1/write-text.txt`,
  `The result is ${first} and ${second}`,
  { flag: "a" }
);

console.log(first, second, write);
