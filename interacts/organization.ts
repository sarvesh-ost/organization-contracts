// tslint:disable:no-consecutive-blank-lines ordered-imports align trailing-comma whitespace class-name
// tslint:disable:no-unused-variable
// tslint:disable:no-unbound-method
import { BaseContract } from '@0x/base-contract';
import { BlockParam, BlockParamLiteral, CallData, ContractAbi, ContractArtifact, DecodedLogArgs, MethodAbi, TxData, TxDataPayable, SupportedProvider } from 'ethereum-types';
import { BigNumber, classUtils, logUtils, providerUtils } from '@0x/utils';
import { SimpleContractArtifact } from '@0x/types';
import { Web3Wrapper } from '@0x/web3-wrapper';
import * as ethers from 'ethers';
// tslint:enable:no-unused-variable

export type OrganizationEventArgs =
    | OrganizationOwnershipTransferInitiatedEventArgs
    | OrganizationOwnershipTransferCompletedEventArgs
    | OrganizationAdminAddressChangedEventArgs
    | OrganizationWorkerSetEventArgs
    | OrganizationWorkerUnsetEventArgs;

export enum OrganizationEvents {
    OwnershipTransferInitiated = 'OwnershipTransferInitiated',
    OwnershipTransferCompleted = 'OwnershipTransferCompleted',
    AdminAddressChanged = 'AdminAddressChanged',
    WorkerSet = 'WorkerSet',
    WorkerUnset = 'WorkerUnset',
}

export interface OrganizationOwnershipTransferInitiatedEventArgs extends DecodedLogArgs {
    proposedOwner: string;
    currentOwner: string;
}

export interface OrganizationOwnershipTransferCompletedEventArgs extends DecodedLogArgs {
    newOwner: string;
    previousOwner: string;
}

export interface OrganizationAdminAddressChangedEventArgs extends DecodedLogArgs {
    newAdmin: string;
    previousAdmin: string;
}

export interface OrganizationWorkerSetEventArgs extends DecodedLogArgs {
    worker: string;
    expirationHeight: BigNumber;
}

export interface OrganizationWorkerUnsetEventArgs extends DecodedLogArgs {
    worker: string;
}


/* istanbul ignore next */
// tslint:disable:no-parameter-reassignment
// tslint:disable-next-line:class-name
export class OrganizationContract extends BaseContract {
    public workers = {
        async callAsync(
            index_0: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<BigNumber
        > {
            const self = this as any as OrganizationContract;
            const encodedData = self._strictEncodeArguments('workers(address)', [index_0
        ]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('workers(address)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<BigNumber
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
    };
    public owner = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as OrganizationContract;
            const encodedData = self._strictEncodeArguments('owner()', []);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('owner()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
    };
    public proposedOwner = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as OrganizationContract;
            const encodedData = self._strictEncodeArguments('proposedOwner()', []);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('proposedOwner()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
    };
    public admin = {
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<string
        > {
            const self = this as any as OrganizationContract;
            const encodedData = self._strictEncodeArguments('admin()', []);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('admin()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<string
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
    };
    public initiateOwnershipTransfer = {
        async sendTransactionAsync(
            _proposedOwner: string,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as OrganizationContract;
            const encodedData = self._strictEncodeArguments('initiateOwnershipTransfer(address)', [_proposedOwner
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.initiateOwnershipTransfer.estimateGasAsync.bind(
                    self,
                    _proposedOwner
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            _proposedOwner: string,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as OrganizationContract;
            const encodedData = self._strictEncodeArguments('initiateOwnershipTransfer(address)', [_proposedOwner
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            return gas;
        },
        getABIEncodedTransactionData(
            _proposedOwner: string,
        ): string {
            const self = this as any as OrganizationContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('initiateOwnershipTransfer(address)', [_proposedOwner
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _proposedOwner: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<boolean
        > {
            const self = this as any as OrganizationContract;
            const encodedData = self._strictEncodeArguments('initiateOwnershipTransfer(address)', [_proposedOwner
        ]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('initiateOwnershipTransfer(address)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<boolean
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
    };
    public completeOwnershipTransfer = {
        async sendTransactionAsync(
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as OrganizationContract;
            const encodedData = self._strictEncodeArguments('completeOwnershipTransfer()', []);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.completeOwnershipTransfer.estimateGasAsync.bind(
                    self,
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as OrganizationContract;
            const encodedData = self._strictEncodeArguments('completeOwnershipTransfer()', []);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            return gas;
        },
        getABIEncodedTransactionData(
        ): string {
            const self = this as any as OrganizationContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('completeOwnershipTransfer()', []);
            return abiEncodedTransactionData;
        },
        async callAsync(
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<boolean
        > {
            const self = this as any as OrganizationContract;
            const encodedData = self._strictEncodeArguments('completeOwnershipTransfer()', []);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('completeOwnershipTransfer()');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<boolean
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
    };
    public setAdmin = {
        async sendTransactionAsync(
            _admin: string,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as OrganizationContract;
            const encodedData = self._strictEncodeArguments('setAdmin(address)', [_admin
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.setAdmin.estimateGasAsync.bind(
                    self,
                    _admin
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            _admin: string,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as OrganizationContract;
            const encodedData = self._strictEncodeArguments('setAdmin(address)', [_admin
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            return gas;
        },
        getABIEncodedTransactionData(
            _admin: string,
        ): string {
            const self = this as any as OrganizationContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('setAdmin(address)', [_admin
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _admin: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<boolean
        > {
            const self = this as any as OrganizationContract;
            const encodedData = self._strictEncodeArguments('setAdmin(address)', [_admin
        ]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('setAdmin(address)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<boolean
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
    };
    public setWorker = {
        async sendTransactionAsync(
            _worker: string,
            _expirationHeight: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as OrganizationContract;
            const encodedData = self._strictEncodeArguments('setWorker(address,uint256)', [_worker,
    _expirationHeight
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.setWorker.estimateGasAsync.bind(
                    self,
                    _worker,
                    _expirationHeight
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            _worker: string,
            _expirationHeight: BigNumber,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as OrganizationContract;
            const encodedData = self._strictEncodeArguments('setWorker(address,uint256)', [_worker,
    _expirationHeight
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            return gas;
        },
        getABIEncodedTransactionData(
            _worker: string,
            _expirationHeight: BigNumber,
        ): string {
            const self = this as any as OrganizationContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('setWorker(address,uint256)', [_worker,
    _expirationHeight
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _worker: string,
            _expirationHeight: BigNumber,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<void
        > {
            const self = this as any as OrganizationContract;
            const encodedData = self._strictEncodeArguments('setWorker(address,uint256)', [_worker,
        _expirationHeight
        ]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('setWorker(address,uint256)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<void
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
    };
    public unsetWorker = {
        async sendTransactionAsync(
            _worker: string,
            txData: Partial<TxData> = {},
        ): Promise<string> {
            const self = this as any as OrganizationContract;
            const encodedData = self._strictEncodeArguments('unsetWorker(address)', [_worker
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
                self.unsetWorker.estimateGasAsync.bind(
                    self,
                    _worker
                ),
            );
            const txHash = await self._web3Wrapper.sendTransactionAsync(txDataWithDefaults);
            return txHash;
        },
        async estimateGasAsync(
            _worker: string,
            txData: Partial<TxData> = {},
        ): Promise<number> {
            const self = this as any as OrganizationContract;
            const encodedData = self._strictEncodeArguments('unsetWorker(address)', [_worker
    ]);
            const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...txData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const gas = await self._web3Wrapper.estimateGasAsync(txDataWithDefaults);
            return gas;
        },
        getABIEncodedTransactionData(
            _worker: string,
        ): string {
            const self = this as any as OrganizationContract;
            const abiEncodedTransactionData = self._strictEncodeArguments('unsetWorker(address)', [_worker
    ]);
            return abiEncodedTransactionData;
        },
        async callAsync(
            _worker: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<boolean
        > {
            const self = this as any as OrganizationContract;
            const encodedData = self._strictEncodeArguments('unsetWorker(address)', [_worker
        ]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('unsetWorker(address)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<boolean
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
    };
    public isOrganization = {
        async callAsync(
            _organization: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<boolean
        > {
            const self = this as any as OrganizationContract;
            const encodedData = self._strictEncodeArguments('isOrganization(address)', [_organization
        ]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('isOrganization(address)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<boolean
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
    };
    public isWorker = {
        async callAsync(
            _worker: string,
            callData: Partial<CallData> = {},
            defaultBlock?: BlockParam,
        ): Promise<boolean
        > {
            const self = this as any as OrganizationContract;
            const encodedData = self._strictEncodeArguments('isWorker(address)', [_worker
        ]);
            const callDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
                {
                    to: self.address,
                    ...callData,
                    data: encodedData,
                },
                self._web3Wrapper.getContractDefaults(),
            );
            const rawCallResult = await self._web3Wrapper.callAsync(callDataWithDefaults, defaultBlock);
            BaseContract._throwIfRevertWithReasonCallResult(rawCallResult);
            const abiEncoder = self._lookupAbiEncoder('isWorker(address)');
            // tslint:disable boolean-naming
            const result = abiEncoder.strictDecodeReturnValue<boolean
        >(rawCallResult);
            // tslint:enable boolean-naming
            return result;
        },
    };

    public static async deployFrom0xArtifactAsync(
        artifact: ContractArtifact | SimpleContractArtifact,
        supportedProvider: SupportedProvider,
        txDefaults: Partial<TxData>,
            _owner: string,
            _admin: string,
            _workers: string[],
            _expirationHeight: BigNumber,
    ): Promise<OrganizationContract> {
        if (artifact.compilerOutput === undefined) {
            throw new Error('Compiler output not found in the artifact file');
        }
        const provider = providerUtils.standardizeOrThrow(supportedProvider);
        const bytecode = artifact.compilerOutput.evm.bytecode.object;
        const abi = artifact.compilerOutput.abi;
        return OrganizationContract.deployAsync(bytecode, abi, provider, txDefaults, _owner,
_admin,
_workers,
_expirationHeight
);
    }

    public static async deployAsync(
        bytecode: string,
        abi: ContractAbi,
        supportedProvider: SupportedProvider,
        txDefaults: Partial<TxData>,
            _owner: string,
            _admin: string,
            _workers: string[],
            _expirationHeight: BigNumber,
    ): Promise<OrganizationContract> {
        const provider = providerUtils.standardizeOrThrow(supportedProvider);
        const constructorAbi = BaseContract._lookupConstructorAbi(abi);
        [_owner,
_admin,
_workers,
_expirationHeight
] = BaseContract._formatABIDataItemList(
            constructorAbi.inputs,
            [_owner,
_admin,
_workers,
_expirationHeight
],
            BaseContract._bigNumberToString,
        );
        const iface = new ethers.utils.Interface(abi);
        const deployInfo = iface.deployFunction;
        const txData = deployInfo.encode(bytecode, [_owner,
_admin,
_workers,
_expirationHeight
]);
        const web3Wrapper = new Web3Wrapper(provider);
        const txDataWithDefaults = await BaseContract._applyDefaultsToTxDataAsync(
            {data: txData},
            txDefaults,
            web3Wrapper.estimateGasAsync.bind(web3Wrapper),
        );
        const txHash = await web3Wrapper.sendTransactionAsync(txDataWithDefaults);
        logUtils.log(`transactionHash: ${txHash}`);
        const txReceipt = await web3Wrapper.awaitTransactionSuccessAsync(txHash);
        logUtils.log(`Organization successfully deployed at ${txReceipt.contractAddress}`);
        const contractInstance = new OrganizationContract(abi, txReceipt.contractAddress as string, provider, txDefaults);
        contractInstance.constructorArgs = [_owner,
_admin,
_workers,
_expirationHeight
];
        return contractInstance;
    }


    constructor(abi: ContractAbi, address: string, supportedProvider: SupportedProvider, txDefaults?: Partial<TxData>) {
        super('Organization', abi, address, supportedProvider, txDefaults);
        classUtils.bindAll(this, ['_abiEncoderByFunctionSignature', 'address', 'abi', '_web3Wrapper']);
    }
} // tslint:disable:max-file-line-count
// tslint:enable:no-unbound-method
