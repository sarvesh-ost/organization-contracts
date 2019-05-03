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
var SafeMathContract = (function (_super) {
    __extends(SafeMathContract, _super);
    function SafeMathContract(abi, address, supportedProvider, txDefaults) {
        _super.call(this, 'SafeMath', abi, address, supportedProvider, txDefaults);
        utils_1.classUtils.bindAll(this, ['_abiEncoderByFunctionSignature', 'address', 'abi', '_web3Wrapper']);
    }
    SafeMathContract.prototype.Promise = function () {
        if (artifact.compilerOutput === undefined) {
            throw new Error('Compiler output not found in the artifact file');
        }
        var provider = utils_1.providerUtils.standardizeOrThrow(supportedProvider);
        var bytecode = artifact.compilerOutput.evm.bytecode.object;
        var abi = artifact.compilerOutput.abi;
        return SafeMathContract.deployAsync(bytecode, abi, provider, txDefaults);
    };
    SafeMathContract.prototype.Promise = function () {
        var provider = utils_1.providerUtils.standardizeOrThrow(supportedProvider);
        var constructorAbi = BaseContract._lookupConstructorAbi(abi);
        _a = BaseContract._formatABIDataItemList(constructorAbi.inputs, [], BaseContract._bigNumberToString);
        var iface = new ethers.utils.Interface(abi);
        var deployInfo = iface.deployFunction;
        var txData = deployInfo.encode(bytecode, []);
        var web3Wrapper = new web3_wrapper_1.Web3Wrapper(provider);
        var txDataWithDefaults = await, BaseContract, _applyDefaultsToTxDataAsync = ({ data: txData },
            txDefaults,
            web3Wrapper.estimateGasAsync.bind(web3Wrapper),
        );
        var txHash = await, web3Wrapper, sendTransactionAsync = (txDataWithDefaults);
        utils_1.logUtils.log("transactionHash: " + txHash);
        var txReceipt = await, web3Wrapper, awaitTransactionSuccessAsync = (txHash);
        utils_1.logUtils.log("SafeMath successfully deployed at " + txReceipt.contractAddress);
        var contractInstance = new SafeMathContract(abi, txReceipt.contractAddress, as, string, provider, txDefaults);
        contractInstance.constructorArgs = [];
        return contractInstance;
        var _a;
    };
    SafeMathContract.async = deployFrom0xArtifactAsync(artifact, ethereum_types_1.ContractArtifact | types_1.SimpleContractArtifact, supportedProvider, ethereum_types_1.SupportedProvider, txDefaults, Partial < ethereum_types_1.TxData > );
    SafeMathContract.async = deployAsync(bytecode, string, abi, ethereum_types_1.ContractAbi, supportedProvider, ethereum_types_1.SupportedProvider, txDefaults, Partial < ethereum_types_1.TxData > );
    return SafeMathContract;
})(base_contract_1.BaseContract);
exports.SafeMathContract = SafeMathContract; // tslint:disable:max-file-line-count
// tslint:enable:no-unbound-method
//# sourceMappingURL=safe_math.js.map