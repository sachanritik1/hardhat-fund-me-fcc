/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { FundMe, FundMeInterface } from "../FundMe";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "priceFeedAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "FundMe__NotOwner",
    type: "error",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "MINIMUM_USD",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "cheaperWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "fund",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "funder",
        type: "address",
      },
    ],
    name: "getAddressToAmountFunded",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getFunder",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPriceFeed",
    outputs: [
      {
        internalType: "contract AggregatorV3Interface",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getVersion",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "s_priceFeed",
    outputs: [
      {
        internalType: "contract AggregatorV3Interface",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60a06040523480156200001157600080fd5b506040516200145c3803806200145c833981810160405281019062000037919062000120565b3373ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b8152505080600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505062000152565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620000e882620000bb565b9050919050565b620000fa81620000db565b81146200010657600080fd5b50565b6000815190506200011a81620000ef565b92915050565b600060208284031215620001395762000138620000b6565b5b6000620001498482850162000109565b91505092915050565b60805160601c6112d66200018660003960008181610488015281816106d701528181610727015261091d01526112d66000f3fe6080604052600436106100955760003560e01c8063893d20e811610059578063893d20e8146101835780639e87a5cd146101ae578063b60d4288146101d9578063be2693f0146101e3578063d7b4750c146101fa576100a4565b80630343fb25146100ae5780630d8e6e2c146100eb5780630ec3b027146101165780633ccfd60b146101415780636b69a59214610158576100a4565b366100a4576100a2610237565b005b6100ac610237565b005b3480156100ba57600080fd5b506100d560048036038101906100d09190610be1565b610371565b6040516100e29190610c27565b60405180910390f35b3480156100f757600080fd5b506101006103b9565b60405161010d9190610c27565b60405180910390f35b34801561012257600080fd5b5061012b610460565b6040516101389190610ca1565b60405180910390f35b34801561014d57600080fd5b50610156610486565b005b34801561016457600080fd5b5061016d6106c6565b60405161017a9190610c27565b60405180910390f35b34801561018f57600080fd5b506101986106d3565b6040516101a59190610ccb565b60405180910390f35b3480156101ba57600080fd5b506101c36106fb565b6040516101d09190610ca1565b60405180910390f35b6101e1610237565b005b3480156101ef57600080fd5b506101f8610725565b005b34801561020657600080fd5b50610221600480360381019061021c9190610d12565b6109b3565b60405161022e9190610ccb565b60405180910390f35b6802b5e3af16b1880000610276600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16346109fb90919063ffffffff16565b10156102b7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102ae90610d9c565b60405180910390fd5b346000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546103059190610deb565b925050819055506001339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166354fd4d506040518163ffffffff1660e01b815260040160206040518083038186803b15801561042357600080fd5b505afa158015610437573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061045b9190610e56565b905090565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461050b576040517f579610db00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60005b6001805490508110156105b65760006001828154811061053157610530610e83565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905060008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505080806105ae90610eb2565b91505061050e565b50600067ffffffffffffffff8111156105d2576105d1610efb565b5b6040519080825280602002602001820160405280156106005781602001602082028036833780820191505090505b5060019080519060200190610616929190610ad7565b5060003373ffffffffffffffffffffffffffffffffffffffff164760405161063d90610f5b565b60006040518083038185875af1925050503d806000811461067a576040519150601f19603f3d011682016040523d82523d6000602084013e61067f565b606091505b50509050806106c3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106ba90610fbc565b60405180910390fd5b50565b6802b5e3af16b188000081565b60007f0000000000000000000000000000000000000000000000000000000000000000905090565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146107aa576040517f579610db00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000600180548060200260200160405190810160405280929190818152602001828054801561082e57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190600101908083116107e4575b5050505050905060005b81518110156108b857600082828151811061085657610855610e83565b5b6020026020010151905060008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505080806108b090610eb2565b915050610838565b50600067ffffffffffffffff8111156108d4576108d3610efb565b5b6040519080825280602002602001820160405280156109025781602001602082028036833780820191505090505b5060019080519060200190610918929190610ad7565b5060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff164760405161095f90610f5b565b60006040518083038185875af1925050503d806000811461099c576040519150601f19603f3d011682016040523d82523d6000602084013e6109a1565b606091505b50509050806109af57600080fd5b5050565b6000600182815481106109c9576109c8610e83565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600080610a0783610a37565b90506000670de0b6b3a76400008583610a209190610fdc565b610a2a9190611065565b9050809250505092915050565b6000808273ffffffffffffffffffffffffffffffffffffffff1663feaf968c6040518163ffffffff1660e01b815260040160a06040518083038186803b158015610a8057600080fd5b505afa158015610a94573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ab8919061110e565b5050509150506402540be40081610acf9190611189565b915050919050565b828054828255906000526020600020908101928215610b50579160200282015b82811115610b4f5782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555091602001919060010190610af7565b5b509050610b5d9190610b61565b5090565b5b80821115610b7a576000816000905550600101610b62565b5090565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610bae82610b83565b9050919050565b610bbe81610ba3565b8114610bc957600080fd5b50565b600081359050610bdb81610bb5565b92915050565b600060208284031215610bf757610bf6610b7e565b5b6000610c0584828501610bcc565b91505092915050565b6000819050919050565b610c2181610c0e565b82525050565b6000602082019050610c3c6000830184610c18565b92915050565b6000819050919050565b6000610c67610c62610c5d84610b83565b610c42565b610b83565b9050919050565b6000610c7982610c4c565b9050919050565b6000610c8b82610c6e565b9050919050565b610c9b81610c80565b82525050565b6000602082019050610cb66000830184610c92565b92915050565b610cc581610ba3565b82525050565b6000602082019050610ce06000830184610cbc565b92915050565b610cef81610c0e565b8114610cfa57600080fd5b50565b600081359050610d0c81610ce6565b92915050565b600060208284031215610d2857610d27610b7e565b5b6000610d3684828501610cfd565b91505092915050565b600082825260208201905092915050565b7f596f75206e65656420746f2073656e64206d6f72652045544821000000000000600082015250565b6000610d86601a83610d3f565b9150610d9182610d50565b602082019050919050565b60006020820190508181036000830152610db581610d79565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610df682610c0e565b9150610e0183610c0e565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610e3657610e35610dbc565b5b828201905092915050565b600081519050610e5081610ce6565b92915050565b600060208284031215610e6c57610e6b610b7e565b5b6000610e7a84828501610e41565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000610ebd82610c0e565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415610ef057610eef610dbc565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600081905092915050565b50565b6000610f45600083610f2a565b9150610f5082610f35565b600082019050919050565b6000610f6682610f38565b9150819050919050565b7f43616c6c206661696c6564000000000000000000000000000000000000000000600082015250565b6000610fa6600b83610d3f565b9150610fb182610f70565b602082019050919050565b60006020820190508181036000830152610fd581610f99565b9050919050565b6000610fe782610c0e565b9150610ff283610c0e565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561102b5761102a610dbc565b5b828202905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061107082610c0e565b915061107b83610c0e565b92508261108b5761108a611036565b5b828204905092915050565b600069ffffffffffffffffffff82169050919050565b6110b581611096565b81146110c057600080fd5b50565b6000815190506110d2816110ac565b92915050565b6000819050919050565b6110eb816110d8565b81146110f657600080fd5b50565b600081519050611108816110e2565b92915050565b600080600080600060a0868803121561112a57611129610b7e565b5b6000611138888289016110c3565b9550506020611149888289016110f9565b945050604061115a88828901610e41565b935050606061116b88828901610e41565b925050608061117c888289016110c3565b9150509295509295909350565b6000611194826110d8565b915061119f836110d8565b9250827f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04821160008413600084131616156111de576111dd610dbc565b5b817f8000000000000000000000000000000000000000000000000000000000000000058312600084126000841316161561121b5761121a610dbc565b5b827f8000000000000000000000000000000000000000000000000000000000000000058212600084136000841216161561125857611257610dbc565b5b827f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff058212600084126000841216161561129557611294610dbc565b5b82820290509291505056fea264697066735822122041b76d6acba779c432f994322a98ed94d4434a1b5580056388c521294264d7d364736f6c63430008080033";

type FundMeConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FundMeConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FundMe__factory extends ContractFactory {
  constructor(...args: FundMeConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "FundMe";
  }

  deploy(
    priceFeedAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<FundMe> {
    return super.deploy(priceFeedAddress, overrides || {}) as Promise<FundMe>;
  }
  getDeployTransaction(
    priceFeedAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(priceFeedAddress, overrides || {});
  }
  attach(address: string): FundMe {
    return super.attach(address) as FundMe;
  }
  connect(signer: Signer): FundMe__factory {
    return super.connect(signer) as FundMe__factory;
  }
  static readonly contractName: "FundMe";
  public readonly contractName: "FundMe";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FundMeInterface {
    return new utils.Interface(_abi) as FundMeInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): FundMe {
    return new Contract(address, _abi, signerOrProvider) as FundMe;
  }
}
