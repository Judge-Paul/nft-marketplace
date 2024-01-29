/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const functions = require("firebase-functions");
const axios = require("axios");

const serverUrl = process.env.SERVER_URL;

const endpoints = [
  "/collections",
  "/tokens",
  "/rankings/oneDay",
  "/rankings/sevenDays",
  "/rankings/thirtyDays",
];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

exports.hitServer = functions.pubsub
  .schedule("every 3 minutes")
  .onRun(async (context) => {
    const currentTime = new Date().toLocaleString();
    const randomEndpointIndex = getRandomInt(0, endpoints.length - 1);
    const randomEndpoint = endpoints[randomEndpointIndex];
    try {
      await axios.head(`${serverUrl}${randomEndpoint}`);
      console.log(`Sent response to ${randomEndpoint} at ${currentTime}.`);
      return null;
    } catch (error) {
      console.error(
        `Failed to send response to ${randomEndpoint} at ${currentTime}.`,
      );
      return null;
    }
  });

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
