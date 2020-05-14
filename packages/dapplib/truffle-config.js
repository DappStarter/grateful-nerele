require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess narrow fringe skull guard render remember smile include clock bone general'; 
let testAccounts = [
"0x399b56291a284149f51b7a16e5b7eb831065cf5b964033dc107c5f9a0f408d70",
"0xc2996ed44fd9af0eee7449e6d6c944290be69e550962a585168d6ee94db5678b",
"0x1ba2af30039f93dd7d07eb848d247fc846dd96b605a4144d4c9c400c6e3c4bc2",
"0x21fe6e26a716733324b111fbd545bffdc911bce4d8fd7ccdf5e823af85c0241f",
"0x1b25f2e3b3747986c228287a2bda669807b24831f1d83f36fccfbf2e8c05e512",
"0xfd6fddeea7b51bbef03dd64cc0dc7ac06ab6260a716cb226803441955227dd98",
"0x980b0a4a6ffeedef1397f2d6c8bc98fb83fb1b03c111fdd1faf6f27dd2f1b18f",
"0x3f9905b92beeb3dc5018997861a2cabeb64737ad9ffb3ddf32525e7465a73fb0",
"0x7a1affb446bd321c43903e6996ba740ae2328a36981df482a276f52aa06c0607",
"0xb789996a40dd059a84d4afc95d8e77d54c4528c9eb8d965059ac0e58521f1dbf"
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
            version: '^0.5.11'
        }
    }
};
