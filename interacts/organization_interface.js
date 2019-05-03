var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// tslint:disable:no-consecutive-blank-lines ordered-imports align trailing-comma whitespace class-name
// tslint:disable:no-unused-variable
// tslint:disable:no-unbound-method
var base_contract_1 = require('@0x/base-contract');
var ethereum_types_1 = require('ethereum-types');
var utils_1 = require('@0x/utils');
var types_1 = require('@0x/types');
var web3_wrapper_1 = require('@0x/web3-wrapper');
var ethers = require('ethers');
// tslint:enable:no-unused-variable
/* istanbul ignore next */
// tslint:disable:no-parameter-reassignment
// tslint:disable-next-line:class-name
var OrganizationInterfaceContract = (function (_super) {
    __extends(OrganizationInterfaceContract, _super);
    function OrganizationInterfaceContract() {
        _super.apply(this, arguments);
        this.isOrganization = {
            async: callAsync(_organization, string, callData, Partial < ethereum_types_1.CallData > , {}, defaultBlock ?  : ethereum_types_1.BlockParam), Promise: function () {
                var self = this, as = any, as = OrganizationInterfaceContract;
                var encodedData = self._strictEncodeArguments('isOrganization(address)', [_organization
                ]);
                var callDataWithDefaults = await, BaseContract, _applyDefaultsToTxDataAsync = ({
                    to: self.address, });
                callData,
                    data;
                encodedData,
                ;
            },
            self: ._web3Wrapper.getContractDefaults(),
            const: rawCallResult = await, self: ._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock),
            BaseContract: ._throwIfRevertWithReasonCallResult(rawCallResult),
            const: abiEncoder = self._lookupAbiEncoder('isOrganization(address)'),
            // tslint:disable boolean-naming
            const: result = abiEncoder.strictDecodeReturnValue(rawCallResult),
            // tslint:enable boolean-naming
            return: result
        };
    }
    return OrganizationInterfaceContract;
})(base_contract_1.BaseContract);
exports.OrganizationInterfaceContract = OrganizationInterfaceContract;
;
isWorker = {
    async: callAsync(_worker, string, callData, Partial < ethereum_types_1.CallData > , {}, defaultBlock ?  : ethereum_types_1.BlockParam), Promise: function () {
        var self = this, as = any, as = OrganizationInterfaceContract;
        var encodedData = self._strictEncodeArguments('isWorker(address)', [_worker
        ]);
        var callDataWithDefaults = await, BaseContract, _applyDefaultsToTxDataAsync = ({
            to: self.address, });
        callData,
            data;
        encodedData,
        ;
    },
    self: ._web3Wrapper.getContractDefaults(),
    const: rawCallResult = await, self: ._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock),
    BaseContract: ._throwIfRevertWithReasonCallResult(rawCallResult),
    const: abiEncoder = self._lookupAbiEncoder('isWorker(address)'),
    // tslint:disable boolean-naming
    const: result = abiEncoder.strictDecodeReturnValue(rawCallResult),
    // tslint:enable boolean-naming
    return: result
},
;
;
async;
deployFrom0xArtifactAsync(artifact, ethereum_types_1.ContractArtifact | types_1.SimpleContractArtifact, supportedProvider, ethereum_types_1.SupportedProvider, txDefaults, Partial < ethereum_types_1.TxData > );
Promise < OrganizationInterfaceContract > {
    if: function (artifact, compilerOutput) {
        if (compilerOutput === void 0) { compilerOutput =  === undefined; }
        throw new Error('Compiler output not found in the artifact file');
    },
    const: provider = utils_1.providerUtils.standardizeOrThrow(supportedProvider),
    const: bytecode = artifact.compilerOutput.evm.bytecode.object,
    const: abi = artifact.compilerOutput.abi,
    return: OrganizationInterfaceContract.deployAsync(bytecode, abi, provider, txDefaults)
};
async;
deployAsync(bytecode, string, abi, ethereum_types_1.ContractAbi, supportedProvider, ethereum_types_1.SupportedProvider, txDefaults, Partial < ethereum_types_1.TxData > );
Promise < OrganizationInterfaceContract > (_a = {
        const: provider = utils_1.providerUtils.standardizeOrThrow(supportedProvider),
        const: constructorAbi = base_contract_1.BaseContract._lookupConstructorAbi(abi)
    },
    _a[] =  = base_contract_1.BaseContract._formatABIDataItemList(constructorAbi.inputs, [], base_contract_1.BaseContract._bigNumberToString),
    _a.const = iface = new ethers.utils.Interface(abi),
    _a.const = deployInfo = iface.deployFunction,
    _a.const = txData = deployInfo.encode(bytecode, []),
    _a.const = web3Wrapper = new web3_wrapper_1.Web3Wrapper(provider),
    _a.const = txDataWithDefaults = await,
    _a.BaseContract = ._applyDefaultsToTxDataAsync({ data: txData }, txDefaults, web3Wrapper.estimateGasAsync.bind(web3Wrapper)),
    _a.const = txHash = await,
    _a.web3Wrapper = .sendTransactionAsync(txDataWithDefaults),
    _a.logUtils = .log("transactionHash: " + txHash),
    _a.const = txReceipt = await,
    _a.web3Wrapper = .awaitTransactionSuccessAsync(txHash),
    _a.logUtils = .log("OrganizationInterface successfully deployed at " + txReceipt.contractAddress),
    _a.const = contractInstance = new OrganizationInterfaceContract(abi, txReceipt.contractAddress, as, string, provider, txDefaults),
    _a.contractInstance = .constructorArgs = [],
    _a.return = contractInstance,
    _a
);
constructor(abi, ethereum_types_1.ContractAbi, address, string, supportedProvider, ethereum_types_1.SupportedProvider, txDefaults ?  : Partial(), {
    super: function () { }, 'OrganizationInterface': , abi: abi, address: address, supportedProvider: supportedProvider, txDefaults:  });
utils_1.classUtils.bindAll(this, ['_abiEncoderByFunctionSignature', 'address', 'abi', '_web3Wrapper']);
var _a;
// tslint:enable:no-unbound-method
//# sourceMappingURL=organization_interface.js.map