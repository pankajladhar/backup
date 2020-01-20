const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.createUser = functions.auth.user().onCreate(async user => {
  const emailId = user.email;
  const writeResult = await admin
    .firestore()
    .collection("users")
    .doc(`${emailId}`)
    .set({ emailId: emailId, loginCount: 0 });
  res.json({ result: `Message with ID: ${writeResult.id} added.` });
});
