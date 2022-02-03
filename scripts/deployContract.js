const { ethers, upgrades } = require("hardhat");
require("dotenv").config();

async function main() {
  // Deploying
  const Box = await ethers.getContractFactory("Box");

  const instance = await upgrades.deployProxy(Box, [42], {kind:'uups'});
  await instance.deployed();
  console.log("Initially Deployed", instance.address);
  console.log(await instance.x());

  // Upgrading
  // const BoxV2 = await ethers.getContractFactory("BoxV2");
  // const upgraded = await upgrades.upgradeProxy(instance.address, BoxV2);
  // await upgraded.deployed();
  // await upgraded.setY(55);
  // console.log("Upgraded", upgraded.address);
  // console.log(await upgraded.x(), await upgraded.y());
}

main();