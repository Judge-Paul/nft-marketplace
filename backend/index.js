const express = require("express");

const app = express();
const port = 3000;
const cors = require('cors');

let collections = null
async function getCollectionsData() {
    const sdk = require('api')('@reservoirprotocol/v3.0#2sq1jdslllg6zxko6');

    sdk.auth('bdda386d-33f0-56a7-8e34-4b41089e03e9');
    sdk.getCollectionsV5({accept: '*/*'})
        .then(({ data }) => collections = data)
        .catch(err => console.error(err));
}
getCollectionsData()

app.use(cors({
    origin: "http://localhost:5173"
}));
app.get("/collections", async (req, res) => {
    res.send(collections)
})
app.get("/price", async (req, res) => {
    
})
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
})