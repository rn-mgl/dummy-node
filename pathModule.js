const path = require("path");

console.log(path.sep);

const pathLoc = path.join("/folder1", "folder2", "test.txt");

console.log(pathLoc);

const base = path.basename(pathLoc);

console.log(base);

const absolute = path.resolve(__dirname, "folder1", "folder2", "test.txt");

console.log(absolute);
