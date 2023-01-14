const Web3 = require("web3");
const coinContractData = require("./build/contracts/Coin.json");

const web3 = new Web3("ws://localhost:9545");

const createCoinContract = async () => {
  const networkId = await web3.eth.net.getId();
  const network = coinContractData.networks?.[networkId];
  const coinContract = new web3.eth.Contract(
    coinContractData.abi,
    network.address
  );

  const accounts = await web3.eth.getAccounts();

  coinContract.events
    .MyEvent({})
    .on("changed", (data) => console.log("changed", data))
    .on("data", (data) => console.log("data", data.returnValues));

  await new Promise((resolve) => setTimeout(() => resolve(""), 2000));

  await coinContract.methods.emitMyEvent("test1").send({
    from: accounts[0],
  });
  // coinContract
  //   .getPastEvents("MyEvent", {
  //     fromBlock: 0,
  //     filter: {
  //       value: "test1",
  //     },
  //   })
  //   .then((res) => console.log(res));

  // coinContract.methods
  //   .add(10)
  //   .send({
  //     from: accounts[0],
  //   })
  //   .then((res) => console.log(res.transactionHash));

  // await coinContract.methods
  //   .sendEth()
  //   .send({
  //     from: accounts[0],
  //     value: "1000000000000",
  //   })
  //   .then((result) => console.log("sendEth", result.transactionHash));

  // await web3.eth.sendTransaction({
  //   from: accounts[0],
  //   to: coinContract.options.address,
  //   value: "100000000000",
  // });

  // await web3.eth
  //   .sendTransaction({
  //     from: accounts[0],
  //     to: accounts[1],
  //     value: "100000000000",
  //   })
  //   .then((res) => console.log(res));

  // const callRes = await coinContract.methods.data().call();
  // const status = await coinContract.methods.status().call();

  // console.log({ callRes, status });

  // return coinContract;
};

createCoinContract();
