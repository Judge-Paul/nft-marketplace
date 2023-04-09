const express = require("express");
const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/common-evm-utils");

const app = express();
const port = 3000;
const cors = require('cors');

let Data = null
async function getNFTData() {
    await Moralis.start({
        apiKey: "3zEgIUavUjbTOyg0aImBIb3Bzp9YeaRg9wkCMkuGvhwrrFuwAYQdLjRuL4TCIEB8",
        // ...and any other configuration
      });
    
    //   const address = "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB";
      const address = "0x32973908faee0bf825a343000fe412ebe56f802a";
    
      const chain = EvmChain.ETHEREUM;
    
      const response = await Moralis.EvmApi.nft.getContractNFTs({
        address,
        chain,
      });
      Data = await response
}
getNFTData()
app.use(cors({
    origin: "http://localhost:5173"
}));
app.get("/market", async (req, res) => {
    res.send(Data.result)
})
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
})