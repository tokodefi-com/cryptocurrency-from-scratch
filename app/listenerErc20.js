const {ethers} = require("ethers");
const contract = require("../contract/artifacts/TokodefiERC20.json");
const NETWORK_RPC_POLYGON = process.env.NETWORK_RPC_POLYGON ||
    "https://polygon-rpc.com";
const ERC20_ADDRESS = process.env.ERC20_ADDRESS ||
    "your contract address";

const provider = ethers.getDefaultProvider(NETWORK_RPC_POLYGON);

provider.getBlockNumber().then(console.log)

const token = new ethers.Contract(ERC20_ADDRESS, contract.abi, provider);

token.on("Approval", (owner, spender, value) => {
    console.log(`Approval -> owner ${owner} spender ${spender} value ${value}`);
});

token.on("Transfer", (from, to, value) => {
    console.log(`Transfer -> from ${from} to ${to} value ${value}`);
});
