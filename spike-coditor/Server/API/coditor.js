const app = require("express");
const fs = require("fs");
const path = require("path");
const exec = require("child_process").exec;
const playground = path.join(__dirname, "..", "code-folder");
const problems = path.join(__dirname, "..", "problems");

const coditor = app.Router();

coditor.post("/run", (req, res) => {
  const template = fs.readFileSync(
    path.join(problems, "1", "code-template.txt"),
    "utf-8"
  );
  const content = template.replace(/\{USER_CODE\}/, req.body.code);

  fs.writeFileSync(`${playground}/index.js`, content);
  

  const command = exec(
    `node ${playground}/index.js < ${problems}/1/input.txt > ${playground}/out.txt`
  );

  let stdOutData = "";
  stderrData = "";

  command.stdout.on("data", data => data);
  command.stderr.on("data", data => {
    const arr = data.split("\n");
    arr.splice(0, 1, "solution.js");
    stderrData = arr.join("\n");
    return stderrData;
  });

  command.on("close", code =>
    res
      .status(200)
      .send({
        output: JSON.parse(fs.readFileSync(`${playground}/out.txt`, "utf-8")),
        error: stderrData
      })
  );
});

coditor.get("/live", (req, res) => {
  res.status(200).send({ message: "run sucessfully" });
});

module.exports = coditor;
