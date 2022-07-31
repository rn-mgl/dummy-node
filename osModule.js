const os = require("os");

const user = os.userInfo();
console.log(user);

const upTime = os.uptime();
console.log(`System uptime is ${upTime} seconds`);

const currOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currOS);
