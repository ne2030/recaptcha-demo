
(async() => {

  await ethereum.request({ method: "eth_requestAccounts" })



  const provider = new ethers.providers.Web3Provider(window.ethereum)

  const result = await provider.send('eth_newPendingTransactionFilter', []);
  console.log(result);

// const infuraProvider = new ethers.providers.InfuraProvider("rinkeby", {
//     projectId: '8043cf9873da4684b768e694a5df1fd7',
//     projectSecret: '7d2bbd4d2a224fa1bc91dd824c2e99a9',
//   });
//
//   const result = await infuraProvider.send('eth_pendingTransactions', []);
//   console.log(result);
//
// console.log(infuraProvider)
//
// let lastBlockTime = new Date();
// provider.pollingInterval = 1000;
//
// console.log('start listening');
//   const { gasPrice, maxFeePerGas, maxPriorityFeePerGas } = await infuraProvider.getFeeData();
//   // from: await devWallet.address,
//   // const txData = {
//   //     data: "0x",
//   //     gasLimit: ethers.utils.hexlify(30_000_000),
//   //     maxPriorityFeePerGas: ethers.utils.hexlify(maxPriorityFeePerGas.toNumber()),
//   //     maxFeePerGas: ethers.utils.hexlify(maxFeePerGas.toNumber()),
//   //     nonce: await devWallet.getTransactionCount(),
//   //     to: "0x0C0ff011A2bF707d28BCBE0893045485B1D1ad27", // TESTER_E
//   //     value: ethers.utils.hexlify(ethers.utils.parseEther("0.01")),
//   //     chainId: ethers.utils.hexlify(await devWallet.getChainId()),
//   //     accessList: [],
//   //     type: "0x02"
//   // };
//   const signer = await provider.getSigner();
//
//   const txData = {
//     data: "0x",
//     gasLimit: 3000000,
//     maxPriorityFeePerGas: '2500000000',
//     maxFeePerGas: '2500000028',
//     nonce: await signer.getTransactionCount(),
//     to: "0x0C0ff011A2bF707d28BCBE0893045485B1D1ad27", // TESTER_E
//     value: ethers.utils.parseEther("0.01").toString(),
//     chainId: (await provider.getNetwork()).chainId,
//     accessList: [],
//     type: 2
//   };
//
//   console.log("tx", txData);
//
//   const signedTx = await signer.signTransaction(txData);
//   console.log("signedTx", signedTx);


  /// Frontend

  // const rec = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
  // console.log("rec", rec);

  // const common = new Common({ chain: Chain.Rinkeby, hardfork: Hardfork.London });
  //
  // const tx = FeeMarketEIP1559Transaction.fromTxData(txData, { common });
  //
  // const res = await tx.sign(privateKey);
  // console.log("set", ethers.utils.hexlify(res.serialize()));
  // const sed = await web3.eth.sendSignedTransaction(ethers.utils.hexlify(res.serialize()));
  //
  // console.log("sed", sed);

  // const signedTx = act.sign(txData, process.env.PRIVATE_KEY);
  //
  // let unsignedTx = tx.getMessageToSign(false);
  // unsignedTx = rlp.encode(unsignedTx);
  //
  // console.log("unsignedTx", unsignedTx);
  //
  // const res = await web3.eth.sendSignedTransaction(unsignedTx);
  // console.log("res", res);

  // const tt = tx.sign(privateKey);

  // console.log("====", tt);

  // const signTx = await devWallet.signTransaction(txParams);
  // console.log("signTx", signTx);

  // const res = await infuraProvider.sendTransaction(txData);
  // console.log("res", res);

  // const ser = ethers.utils.serializeTransaction(txRequest, sign);
  // console.log("ser", ser);


// const checkBlockInterval = (blockNumber) => {
//   const receiveTime = new Date();
//   console.log(`Interval: ${receiveTime - lastBlockTime}`);
//   lastBlockTime = receiveTime;
//   provider.getBlock(blockNumber).then(b => {
//     console.log(`--- Block(${blockNumber}): ${receiveTime - new Date(b.timestamp * 1000)}`);
//   })
// }
//
// provider.on('block', async blockNumber => {
//   // checkBlockInterval(blockNumber);
//   console.log(`Block Received: ${blockNumber}`);
//   const block = await provider.getBlockWithTransactions(blockNumber);
//
//   console.log(block);
// })

// setTimeout(() => {
//   provider.off('block')
//   console.log('removed ---')
// }, 1000 * 60);
//
})()