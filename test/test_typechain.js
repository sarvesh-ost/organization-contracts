"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var ganache = require("ganache-cli");
var Web3 = require("web3");
var path_1 = require("path");
var fs_1 = require("fs");
var GAS_LIMIT_STANDARD = 1000000;
var web3;
var accounts;
function createNewBlockchain() {
    return __awaiter(this, void 0, void 0, function () {
        var web3, accounts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    web3 = new Web3(ganache.provider());
                    return [4 /*yield*/, web3.eth.getAccounts()];
                case 1:
                    accounts = _a.sent();
                    return [2 /*return*/, { web3: web3, accounts: accounts }];
            }
        });
    });
}
function setup() {
    return __awaiter(this, void 0, void 0, function () {
        var r;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, createNewBlockchain()];
                case 1:
                    r = _a.sent();
                    web3 = r.web3;
                    accounts = r.accounts;
                    console.log("setup done");
                    return [2 /*return*/];
            }
        });
    });
}
;
function deployContract(contractName) {
    return __awaiter(this, void 0, void 0, function () {
        var abiDirPath, artifact, abi, code, Contract, t;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    abiDirPath = path_1.join(__dirname, "../build/contracts");
                    artifact = JSON.parse(fs_1.readFileSync(path_1.join(abiDirPath, contractName + ".json"), "utf-8"));
                    abi = artifact.abi;
                    code = artifact.bytecode;
                    Contract = new web3.eth.Contract(abi);
                    t = Contract.deploy({ arguments: [
                            accounts[0],
                            accounts[0],
                            [accounts[0]],
                            1000
                        ], data: code });
                    return [4 /*yield*/, t.send({
                            from: accounts[0],
                            gas: GAS_LIMIT_STANDARD
                        })];
                case 1: return [2 /*return*/, (_a.sent())];
            }
        });
    });
}
exports.deployContract = deployContract;
function organizationContractTest() {
    return __awaiter(this, void 0, void 0, function () {
        var contract, adminAddress, isWorker, receipt;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, setup()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, deployContract("Organization")];
                case 2:
                    contract = (_a.sent());
                    return [4 /*yield*/, contract.methods.admin().call()];
                case 3:
                    adminAddress = _a.sent();
                    return [4 /*yield*/, contract.methods.isWorker(accounts[0]).call()];
                case 4:
                    isWorker = _a.sent();
                    return [4 /*yield*/, contract.methods.setAdmin(accounts[1]).send({ from: accounts[0] })];
                case 5:
                    receipt = _a.sent();
                    console.log("admin Address  ", adminAddress);
                    console.log("isWorker  ", isWorker);
                    console.log('receipt  ', receipt);
                    return [2 /*return*/];
            }
        });
    });
}
organizationContractTest();
