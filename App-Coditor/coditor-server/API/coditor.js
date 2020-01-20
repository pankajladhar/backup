const app = require("express");
const fs = require("fs");
const path = require("path");
const exec = require("child_process").exec;
const playground = path.join(__dirname, "..", "code-folder");
const problems = path.join(__dirname, "..", "problems");
const admin = require("firebase-admin");

let serviceAccount = require("./../serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://coditor-81437.firebaseio.com"
});

let db = admin.firestore();

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
    res.status(200).send({
      output: JSON.parse(fs.readFileSync(`${playground}/out.txt`, "utf-8")),
      error: stderrData
    })
  );
});

coditor.get("/problems", async (req, res) => {
  const dbRef = db.collection("problems");
  const snapshot = await dbRef.get();
  res.json(snapshot.docs.map(doc => doc.data()));
});

coditor.get("/problem/:problemID", async (req, res) => {
  const dbRef = db.collection("problems").doc(`${req.params.problemID}`);
  const snapshot = await dbRef.get();
  console.log(snapshot);

  res.json(snapshot.data());
});

coditor.patch("/problem/:problemID", async (req, res) => {
  const data = req.body;
  const dbRef = db.collection("problems").doc(`${req.params.problemID}`);
  await dbRef.set(data);
  res.json({ response: "Update successfully" });
});

coditor.post("/problem/:problemID", async (req, res) => {
  const data = req.body;
  const dbRef = db.collection("problems").doc(`${req.params.problemID}`);
  const writeResult = await dbRef.set(data);
  res.json({ result: `Message with ID: ${writeResult.id} added.` });
});

coditor.get("/solutions/:user", async (req, res) => {
  const dbRef = db
    .collection("solutions")
    .doc(req.params.user)
    .collection("userCode");
  const snapshot = await dbRef.get();
  res.json(snapshot.docs.map(doc => doc.data()));
});

coditor.get("/solutions/:user/:cId", async (req, res) => {
  console.log(req.params);
  
  const dbRef = db
    .collection("solutions")
    .doc(req.params.user)
    .collection("userCode")
    .doc(req.params.cId);
  const snapshot = await dbRef.get();
  res.json(snapshot.data());
});

coditor.get("/live", async (req, res) => {
  res.status(200).send({ message: "Hello" });
});

module.exports = coditor;
