/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require('@nomiclabs/hardhat-ethers');


const privateKey = '';

module.exports = {
   defaultNetwork: 'hardhat',

   networks: {
      hardhat: {},
      fantomOpera: {
         url: 'https://rpcapi.fantom.network',
         accounts: [privateKey],
         chainId: 250,
         network_id: '250',
      }
   },
   solidity: {
      compilers: [
         {
            version: '0.8.18',
            settings: {
               optimizer: {
                  enabled: true,
                  runs: 200,
               },
            },
         },
         {
            version: '0.6.6',
            settings: {
               optimizer: {
                  enabled: true,
                  runs: 200,
               },
            },
         },
      ],
   },
   paths: {
      sources: './contracts',
      cache: './cache',
      artifacts: './artifacts',
   },
   mocha: {
      timeout: 20000,
   },
};
