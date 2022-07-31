const fs = require("fs");

fs.readFile("./folder1/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  fs.readFile("./folder1/second.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    fs.writeFile(
      "./folder1/write-async.txt",
      `Async result is ${first} and ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result);
      }
    );
  });
});

fs.readFile("./folder1/write-async.txt", "utf-8", (err, res) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(res);
});
