require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture brand tail tooth blanket crater remind concert grace drip flower tuna'; 
let testAccounts = [
"0x2a1d22ae33ad26dda98846f6649b15cd1adefae25dcdbf3dc4b46b7e45936098",
"0x85f0b8c6daa0001e13090025a48aeb650e8a625c761ef68efc97d08936824dfe",
"0xadca0d17280d84eb7eea254de815c251d72cbe32cd12e0818fec6da9d5aff312",
"0x38d65083c7ea726cbbb025cf867ff733cddd20ef65831c542165d56248f41b9b",
"0xb892f7daa91d7228c65491da1e2ddc4897e45a175ec38487725072433c40af72",
"0x72ff9f340acf9a47a56df32965fc20db677f8c1cc677a6a685bb56f951b64d9b",
"0xac6c41a30381847845eeb65c691a346d6bbbd7a40ae8ebcc94651253275c5bb0",
"0x28db4a425fa48d45767b8c0cc18d0217bf4ac354b5d96c2ae7baa27fe6202b42",
"0xdcca8ec9bdc749ecba780dda5dd64af233788c7bdc4d04edd97b1ad527dd4960",
"0x0c6b2a7e11472f0a76e88736a92825d18285a1eeeb73f285d9155e2a30aad8f9"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

