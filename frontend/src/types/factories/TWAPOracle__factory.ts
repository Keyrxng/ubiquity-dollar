/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { TWAPOracle } from "../TWAPOracle";

export class TWAPOracle__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _pool: string,
    _uADtoken0: string,
    _curve3CRVtoken1: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TWAPOracle> {
    return super.deploy(
      _pool,
      _uADtoken0,
      _curve3CRVtoken1,
      overrides || {}
    ) as Promise<TWAPOracle>;
  }
  getDeployTransaction(
    _pool: string,
    _uADtoken0: string,
    _curve3CRVtoken1: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _pool,
      _uADtoken0,
      _curve3CRVtoken1,
      overrides || {}
    );
  }
  attach(address: string): TWAPOracle {
    return super.attach(address) as TWAPOracle;
  }
  connect(signer: Signer): TWAPOracle__factory {
    return super.connect(signer) as TWAPOracle__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TWAPOracle {
    return new Contract(address, _abi, signerOrProvider) as TWAPOracle;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_pool",
        type: "address",
      },
      {
        internalType: "address",
        name: "_uADtoken0",
        type: "address",
      },
      {
        internalType: "address",
        name: "_curve3CRVtoken1",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "consult",
    outputs: [
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pool",
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
    name: "price0Average",
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
    name: "price1Average",
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
        name: "",
        type: "uint256",
      },
    ],
    name: "priceCumulativeLast",
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
    name: "pricesBlockTimestampLast",
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
    name: "token0",
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
    name: "token1",
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
    name: "update",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60e06040523480156200001157600080fd5b5060405162000ef138038062000ef183398101604081905262000034916200054f565b606083901b6001600160601b03191660805260405163c661065760e01b8152600060048201526001600160a01b03838116919085169063c66106579060240160206040518083038186803b1580156200008c57600080fd5b505afa158015620000a1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000c791906200052b565b6001600160a01b031614801562000165575060405163c661065760e01b8152600160048201526001600160a01b03808316919085169063c66106579060240160206040518083038186803b1580156200011f57600080fd5b505afa15801562000134573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200015a91906200052b565b6001600160a01b0316145b620001b75760405162461bcd60e51b815260206004820152601f60248201527f545741504f7261636c653a20434f494e5f4f524445525f4d49534d415443480060448201526064015b60405180910390fd5b6001600160601b0319606083811b821660a05282901b1660c052604051634903b0d160e01b8152600060048201819052906001600160a01b03851690634903b0d19060240160206040518083038186803b1580156200021557600080fd5b505afa1580156200022a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000250919062000623565b6001600160701b031690506000846001600160a01b0316634903b0d160016040518263ffffffff1660e01b81526004016200028d91815260200190565b60206040518083038186803b158015620002a657600080fd5b505afa158015620002bb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620002e1919062000623565b6001600160701b031690508115801590620002fb57508015155b620003495760405162461bcd60e51b815260206004820152601760248201527f545741504f7261636c653a204e4f5f52455345525645530000000000000000006044820152606401620001ae565b8082146200039a5760405162461bcd60e51b815260206004820152601b60248201527f545741504f7261636c653a20504149525f554e42414c414e43454400000000006044820152606401620001ae565b846001600160a01b0316634469e30e6040518163ffffffff1660e01b8152600401604080518083038186803b158015620003d357600080fd5b505afa158015620003e8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200040e919062000598565b6200041e906003906002620004b4565b50846001600160a01b03166363543f066040518163ffffffff1660e01b815260040160206040518083038186803b1580156200045957600080fd5b505afa1580156200046e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000494919062000623565b6002555050670de0b6b3a764000060008190556001555062000652915050565b8260028101928215620004e5579160200282015b82811115620004e5578251825591602001919060010190620004c8565b50620004f3929150620004f7565b5090565b5b80821115620004f35760008155600101620004f8565b80516001600160a01b03811681146200052657600080fd5b919050565b6000602082840312156200053d578081fd5b62000548826200050e565b9392505050565b60008060006060848603121562000564578182fd5b6200056f846200050e565b92506200057f602085016200050e565b91506200058f604085016200050e565b90509250925092565b600060408284031215620005aa578081fd5b82601f830112620005b9578081fd5b604080519081016001600160401b0381118282101715620005de57620005de6200063c565b8060405250808385604086011115620005f5578384fd5b835b600281101562000618578151835260209283019290910190600101620005f7565b509195945050505050565b60006020828403121562000635578081fd5b5051919050565b634e487b7160e01b600052604160045260246000fd5b60805160601c60a05160601c60c05160601c610836620006bb6000396000818161017101526101da01526000818160c90152610197015260008181610108015281816102a70152818161036c0152818161041d015281816104d7015261056901526108366000f3fe608060405234801561001057600080fd5b50600436106100a35760003560e01c80635e6aaf2c11610076578063a2e620451161005b578063a2e6204514610159578063a6bb453914610163578063d21220a71461016c576100a3565b80635e6aaf2c1461013d5780637536a29114610146576100a3565b80630301b16e146100a85780630dfe1681146100c457806316f0115b14610103578063283583c61461012a575b600080fd5b6100b160025481565b6040519081526020015b60405180910390f35b6100eb7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016100bb565b6100eb7f000000000000000000000000000000000000000000000000000000000000000081565b6100b161013836600461066f565b610193565b6100b160015481565b6100b1610154366004610721565b610267565b61016161027e565b005b6100b160005481565b6100eb7f000000000000000000000000000000000000000000000000000000000000000081565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316826001600160a01b031614156101d85750600054610262565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316826001600160a01b03161461025d5760405162461bcd60e51b815260206004820152601960248201527f545741504f7261636c653a20494e56414c49445f544f4b454e00000000000000604482015260640160405180910390fd5b506001545b919050565b6003816002811061027757600080fd5b0154905081565b6000806102896104cb565b9150915060006002548261029d91906107f0565b11156104c75760007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316630f6ba8e3600385600254866102e591906107f0565b6040518463ffffffff1660e01b81526004016103039392919061077a565b604080518083038186803b15801561031a57600080fd5b505afa15801561032e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610352919061069d565b604051631f90bf0360e21b81529091506001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690637e42fc0c906103b190600090600190670de0b6b3a76400009087906004016107c0565b60206040518083038186803b1580156103c957600080fd5b505afa1580156103dd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104019190610739565b6000908155604051631f90bf0360e21b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001691637e42fc0c9161045f91600191670de0b6b3a76400009087906004016107c0565b60206040518083038186803b15801561047757600080fd5b505afa15801561048b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104af9190610739565b6001556104bf60038460026105fe565b505060028190555b5050565b6104d361063c565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316634469e30e6040518163ffffffff1660e01b8152600401604080518083038186803b15801561052d57600080fd5b505afa158015610541573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610565919061069d565b91507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166363543f066040518163ffffffff1660e01b815260040160206040518083038186803b1580156105c057600080fd5b505afa1580156105d4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105f89190610739565b90509091565b826002810192821561062c579160200282015b8281111561062c578251825591602001919060010190610611565b5061063892915061065a565b5090565b60405180604001604052806002906020820280368337509192915050565b5b80821115610638576000815560010161065b565b600060208284031215610680578081fd5b81356001600160a01b0381168114610696578182fd5b9392505050565b6000604082840312156106ae578081fd5b82601f8301126106bc578081fd5b6040516040810181811067ffffffffffffffff821117156106df576106df610813565b80604052508083856040860111156106f5578384fd5b835b60028110156107165781518352602092830192909101906001016106f7565b509195945050505050565b600060208284031215610732578081fd5b5035919050565b60006020828403121561074a578081fd5b5051919050565b8060005b6002811015610774578151845260209384019390910190600101610755565b50505050565b60a08101818560005b60028110156107a2578154835260209092019160019182019101610783565b5050506107b26040830185610751565b826080830152949350505050565b600f85810b825284900b60208201526040810183905260a081016107e76060830184610751565b95945050505050565b60008282101561080e57634e487b7160e01b81526011600452602481fd5b500390565b634e487b7160e01b600052604160045260246000fdfea164736f6c6343000803000a";