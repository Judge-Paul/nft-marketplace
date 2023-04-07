const express = require("express");
const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/common-evm-utils");

const app = express();
const port = 3000;

const MORALIS_API_KEY = "3zEgIUavUjbTOyg0aImBIb3Bzp9YeaRg9wkCMkuGvhwrrFuwAYQdLjRuL4TCIEB8";
const address = "0xd8da6bf26964af9d7eed9e03e53415d37aa96045";
const chain = EvmChain.ETHEREUM;

async function getDemoData() {
  // Get native balance
  const nativeBalance = await Moralis.EvmApi.balance.getNativeBalance({
    address,
    chain,
  });

  // Format the native balance formatted in ether via the .ether getter
  const native = nativeBalance.result.balance.ether;

  // Get token balances
  const tokenBalances = await Moralis.EvmApi.token.getWalletTokenBalances({
    address,
    chain,
  });

  // Format the balances to a readable output with the .display() method
  const tokens = tokenBalances.result.map((token) => token.display());

  // Get the nfts
  const nftsBalances = await Moralis.EvmApi.nft.getNFTs({
    address,
    chain,
    limit: 10,
  });
  console.log(nftsBalances)
  // Format the output to return name, amount and metadata
  const nfts = nftsBalances.result.map((nft) => ({
    name: nft.result.name,
    amount: nft.result.amount,
    metadata: nft.result.metadata,
  }));

  return { native, tokens, nfts };
}

app.get("/nfts", async (req, res) => {
  try {
    // Get and return the crypto data
    const data = await getDemoData();
    res.status(200);
    res.json(data);
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500);
    res.json({ error: error.message });
  }
});

const startServer = async () => {
  await Moralis.start({
    apiKey: MORALIS_API_KEY,
  });

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
};

startServer();