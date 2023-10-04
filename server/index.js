const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const sdk = require("api")("@reservoirprotocol/v3.0#p570filn9a79gt");
require("dotenv").config();

const app = express();
const port = 3000;

app.use(express.json());
app.use(morgan("dev"));

app.use(
  cors({
    origin: ["http://localhost:5174", "https://nft-market-jadge.vercel.app"],
  }),
);

sdk.auth(process.env.RESERVOIR_API_KEY);

let tokens = [];
const collectionIds = [
  "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
  "0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb",
  "0x60e4d786628fea6478f785a6d7e704777c86a7c6",
  "0x34d85c9cdeb23fa97cb08333b511ac86e1c4e258",
  "0xed5af388653567af2f388e6224dc7c4b3241c544",
  "0x49cf6f5d44e70224e2e23fdcdd2c053f30ada28b",
  "0x495f947276749ce646f68ac8c248420045cb7b5e",
  "0x23581767a106ae21c074b2276d25e5c3e136a68b",
  "0x8a90cab2b38dba80c64b7734e58ee1db38b8992e",
  "0xba30e5f9bb24caa003e9f2f0497ad287fdf95623",
  "0x7bd29408f11d2bfc23c34f18275bbf23bb716bc7",
  "0x81ae0be3a8044772d04f32398bac1e1b4b215aa8",
  "0xb7f7f6c52f2e2fdb1963eab30438024864c313f6",
  "0xbd3531da5cf5857e7cfaa92426877b022e612cf8",
  "0x306b1ea3ecdf94ab739f1910bbda052ed4a9f949",
  "0x1a92f7381b9f03921564a437210bb9396471050c",
  "0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85",
  "0x50f5474724e0ee42d9a4e711ccfb275809fd6d4a",
  "0xe785e82358879f061bc3dcac6f0444462d4b5330",
  "0xff9c1b15b16263c61d017ee9f65c50e4ae0113d7",
];

app.get("/rankings/oneDay", async (req, res) => {
  sdk
    .getCollectionsV7({ sortBy: "1DayVolume", accept: "*/*" })
    .then(({ data }) => res.send(data))
    .catch((err) => res.send(err));
});

app.get("/rankings/sevenDays", async (req, res) => {
  sdk
    .getCollectionsV7({ sortBy: "7DayVolume", accept: "*/*" })
    .then(({ data }) => res.send(data))
    .catch((err) => res.send(err));
});

app.get("/rankings/thirtyDays", async (req, res) => {
  sdk
    .getCollectionsV7({ sortBy: "30DayVolume", accept: "*/*" })
    .then(({ data }) => res.send(data))
    .catch((err) => res.send(err));
});

app.get("/collections", async (req, res) => {
  sdk
    .getCollectionsV7({ accept: "*/*" })
    .then(({ data }) => res.send(data))
    .catch((err) => res.send(err));
});

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

app.get("/tokens", async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 100;
    const page = parseInt(req.query.page) || 1;

    const offset = (page - 1) * limit;

    const getTokens = async () => {
      return await Promise.all(
        collectionIds.map(async function (id) {
          const tokensObj = await getTokensData(id, limit, offset);
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

    res.send(tokens);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
