const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const api = require("api")("@reservoirprotocol/v3.0#2sq1jdslllg6zxko6");

const app = express();

let collections = null;
let collectionsOneDay = null;
let collectionsSevenDays = null;
let collectionsThirtyDays = null;
let tokens = null;

async function getOrderedData(sortBy) {
  try {
    const { data } = await api.getCollectionsV5({ sortBy, accept: "*/*" });
    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
}

async function getCollectionsData() {
  try {
    const { data } = await api.getCollectionsV5({ accept: "*/*" });
    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
}

async function getTokensData(collection, limit) {
  try {
    const { data } = await api.getTokensV6({ collection, limit, accept: "*/*" });
    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
}

async function getData() {
  collectionsOneDay = await getOrderedData("1DayVolume");
  collectionsSevenDays = await getOrderedData("7DayVolume");
  collectionsThirtyDays = await getOrderedData("30DayVolume");
  collections = await getCollectionsData();
  tokens = await getTokensData("0xed5af388653567af2f388e6224dc7c4b3241c544", "100");
}

getData();

app.use(bodyParser.json());

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://nft-market-jadge.vercel.app",
    ],
  })
);

app.get("/collections-one-day", async (req, res) => {
  res.send(collectionsOneDay);
});

app.get("/collections-seven-days", async (req, res) => {
  res.send(collectionsSevenDays);
});

app.get("/collections-thirty-days", async (req, res) => {
  res.send(collectionsThirtyDays);
});

app.get("/collections", async (req, res) => {
  res.send(collections);
});

app.get("/tokens", async (req, res) => {
  res.send(tokens);
});
