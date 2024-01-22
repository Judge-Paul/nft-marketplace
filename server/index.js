const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const sdk = require("api")("@reservoirprotocol/v3.0#p570filn9a79gt");
const NodeCache = require("node-cache");
const cron = require("node-cron");
require("dotenv").config();

const app = express();
const port = 3000;

app.use(express.json());
app.use(morgan("combined"));

app.use(
  cors({
    origin: ["http://localhost:5174", "https://nft-market-jadge.vercel.app"],
  }),
);

sdk.auth(process.env.RESERVOIR_API_KEY);

const collectionsCache = new NodeCache({ stdTTL: 60 * 60 * 24 });
const tokensCache = new NodeCache({ stdTTL: 60 * 60 * 24 * 7 });

const collectionIds = [
  "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
  "0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb",
  "0x60e4d786628fea6478f785a6d7e704777c86a7c6",
  "0x7bd29408f11d2bfc23c34f18275bbf23bb716bc7",
  "0x81ae0be3a8044772d04f32398bac1e1b4b215aa8",
  "0xb7f7f6c52f2e2fdb1963eab30438024864c313f6",
  "0xbd3531da5cf5857e7cfaa92426877b022e612cf8",
  "0x50f5474724e0ee42d9a4e711ccfb275809fd6d4a",
  "0xe785e82358879f061bc3dcac6f0444462d4b5330",
  "0xff9c1b15b16263c61d017ee9f65c50e4ae0113d7",
];

async function updateCollectionsCache() {
  try {
    // Fetch and cache all-time collections data
    const allTimeData = await sdk.getCollectionsV7({ accept: "*/*" });
    collectionsCache.set("allTime", allTimeData.data);

    // Fetch and cache one-day collections data
    const oneDayData = await sdk.getCollectionsV7({
      sortBy: "1DayVolume",
      accept: "*/*",
    });
    collectionsCache.set("oneDay", oneDayData.data);

    // Fetch and cache seven-day collections data
    const sevenDaysData = await sdk.getCollectionsV7({
      sortBy: "7DayVolume",
      accept: "*/*",
    });
    collectionsCache.set("sevenDays", sevenDaysData.data);

    // Fetch and cache thirty-day collections data
    const thirtyDaysData = await sdk.getCollectionsV7({
      sortBy: "30DayVolume",
      accept: "*/*",
    });
    collectionsCache.set("thirtyDays", thirtyDaysData.data);

    console.log("Collections cache updated successfully.");
  } catch (err) {
    console.error("Error updating collections cache:", err);
  }
}

async function getTokensData(collection) {
  try {
    const { data } = await sdk.getTokensV6({
      collection,
      limit: 100,
      accept: "*/*",
    });
    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
}

async function cacheTokensData() {
  try {
    const getTokens = async () => {
      return await Promise.all(
        collectionIds.map(async function (id) {
          const tokensObj = await getTokensData(id);
          return tokensObj.tokens;
        }),
      );
    };

    const arrayOfTokens = await getTokens();
    let tokens = arrayOfTokens.flat();

    tokens = tokens
      .filter(
        (nft) =>
          nft.token.image &&
          nft.market.floorAsk &&
          nft.market.floorAsk.price !== null &&
          nft.market.floorAsk.price !== undefined,
      )
      .sort(() => Math.random() - 0.5);

    // tokensCache the tokens data with a 12-hour expiration
    tokensCache.set("tokensCache", tokens, 12 * 60 * 60);

    console.log("Tokens data cached successfully.");
  } catch (err) {
    console.error("Error caching tokens data:", err);
  }
}

cacheTokensData();
updateCollectionsCache();

cron.schedule("0 */12 * * *", () => {
  console.log("Running collections cache update job.");
  updateCollectionsCache();
  console.log("Running tokens cache update job.");
  cacheTokensData();
});

app.get("/collections", async (req, res) => {
  try {
    const collections = collectionsCache.get("allTime");
    res.send(collections);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/rankings/oneDay", async (req, res) => {
  try {
    const oneDay = collectionsCache.get("oneDay");
    res.send(oneDay);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/rankings/sevenDays", async (req, res) => {
  try {
    const sevenDays = collectionsCache.get("sevenDays");
    res.send(sevenDays);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/rankings/thirtyDays", async (req, res) => {
  try {
    const thirtyDays = collectionsCache.get("thirtyDays");
    res.send(thirtyDays);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/tokens", async (req, res) => {
  try {
    const cachedData = tokensCache.get("tokensCache");

    if (cachedData) {
      console.log("Using cached tokens data.");
      res.send(cachedData);
    } else {
      // If not in cache, fetch data and update cache
      await cacheTokensData();
      res.send(tokensCache.get("tokensCache"));
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
