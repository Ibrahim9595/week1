const {
  writeFile,
  writeFileSync,
  constants,
  appendFile,
  readFileSync,
} = require("fs");

// const res = JSON.parse(readFileSync('./problem.txt', {encoding: 'utf-8'}))

// function convertListToObject(obj) {
//   return Object.entries(obj);
// }

// readFile("./problem.txt", {encoding: 'utf-8'}, (err, data) => {
//    if (err) console.log(err)

//    const parsed = JSON.parse(data)
//    console.log(convertListToObject(parsed))
// })

// readFile("./problem.txt", { encoding: "utf-8" })
//   .then(JSON.parse)
//   .then(convertListToObject)
//   .then(console.log);

// writeFileSync("./example.txt", "1,2,3", {
//   encoding: "utf8",
// });

// appendFile("./example2.txt", "Overwrite",{
//    mode: constants.W_OK
// },  (error) => {
//   console.log(error);
// });
// require('dotenv').config()

const config = () => {
  const res = readFileSync(".env", { encoding: "utf-8" });

  res
    .split("\n")
    .map((el) => el.split("="))
    .filter((el) => el.length == 2)
    .forEach(([key, value]) => {
      process.env[key] = value;
    });
};


config()
console.log(process.env)
