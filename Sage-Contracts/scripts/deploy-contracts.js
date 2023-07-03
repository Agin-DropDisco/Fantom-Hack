const { ethers } = require('hardhat');

// Deploy function
async function deploy() {
   [account] = await ethers.getSigners();
   deployerAddress = account.address;
   console.log(`Deploying contracts using ${deployerAddress}`);

   //Deploy SAGE
   console.log();
   console.log(":: DEPLOY SAGE");
   const Sage = await ethers.getContractFactory('Sage');
   const SageInstance = await Sage.deploy();
   await SageInstance.mint(1000000000);

   //Deploy SAGENFT
   console.log();
   console.log(":: DEPLOY SAGENFT");
   const SageNFT = await ethers.getContractFactory('SageNFT');
   const SageNFTInstance = await SageNFT.deploy();
   await SageNFTInstance.renounceOwnership();


   console.log(`Sage deployed to :    ${SageInstance.address}`);
   console.log(`SageNFT deployed to :       ${SageNFTInstance.address}`);


}

deploy()
   .then(() => process.exit(0))
   .catch((error) => {
      console.error(error);
      process.exit(1);
   });
