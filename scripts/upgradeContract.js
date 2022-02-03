const { ethers, upgrades } = require("hardhat");
require("dotenv").config();

const BOX_ADDRESS = "0x9CDaaBAA3b2390C3a84004707131B3e1AC7e2197"
async function main() {
  const [deployer] = await ethers.getSigners()

  // Deploying
  const BoxV2 = await ethers.getContractFactory("BoxV2", deployer);
  const box = await upgrades.upgradeProxy(BOX_ADDRESS, BoxV2, [55]);
  console.log("Box deployed", box.address);
  await box.deployTransaction.wait();
  await box.setY(55);

  console.log("Box upgraded", box.address, await box.y());
}

main();