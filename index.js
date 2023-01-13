const Web3 = require("web3");
const coinContractData = require("./build/contracts/Coin.json");

const web3 = new Web3(Web3.givenProvider || "http://localhost:9545");

const createCoinContract = async () => {
  const networkId = await web3.eth.net.getId();
  const network = coinContractData.networks?.[networkId];
  const coinContract = new web3.eth.Contract(
    coinContractData.abi,
    network.address
  );

  const res = await coinContract.methods.getData().call();
  console.log({ res });

  return coinContract;
};

async function getBlockNumber() {
  const latestBlockNumber = await web3.eth.getBlockNumber();
  console.log(latestBlockNumber);
  return latestBlockNumber;
}

getBlockNumber();
createCoinContract();
