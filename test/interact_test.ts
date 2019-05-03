import * as Organization from "../interacts/organization";


import {
    RPCSubprovider,
    Web3ProviderEngine,
    GanacheSubprovider
} from '@0x/subproviders';
import {BigNumber} from '@0x/utils';


const providerEngine = new Web3ProviderEngine();
providerEngine.addProvider(
    new GanacheSubprovider(
        {
            port: 8545,
            network_id: 50,
        }
    )
);
providerEngine.start();

import {artifacts} from "../src/artifacts";

const txOptions = {
    gas: 7000000,
    from: "0x5409ed021d9299bf6814279a6a1411a7e866a631",
};

Organization.OrganizationContract.deployFrom0xArtifactAsync(
    artifacts.Organization,
    providerEngine,
    txOptions,
    "0x79376dc1925ba1e0276473244802287394216a39",
    "0x79376dc1925ba1e0276473244802287394216a39",
    ["0x79376dc1925ba1e0276473244802287394216a39"],
    new BigNumber(1000)
).then((receipt) => console.log(receipt)).catch((e) => console.log(e));