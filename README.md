# henesis-cli 
🚀 Command Line Interface tool to Utilize henesis

[![License](https://img.shields.io/npm/l/@haechi-labs/henesis-cli.svg)](https://github.com/HAECHI-LABS/henesis-cli/blob/master/package.json) [![Version](https://img.shields.io/npm/v/@haechi-labs/henesis-cli.svg)](https://www.npmjs.com/package/@haechi-labs/henesis-cli) [![Platform](https://img.shields.io/node/v/@haechi-labs/henesis-cli.svg)](https://github.com/HAECHI-LABS/henesis-cli/blob/master/package.json) [![ci](https://travis-ci.com/HAECHI-LABS/henesis-cli.svg?branch=master)]()


## Install

*_**To use henesis-cli, Node v10 or higher must be installed.**_*

```
$ npm install -g @haechi-labs/henesis-cli

$ henesis help

VERSION
  @haechi-labs/henesis-cli/1.0.0-beta.39 darwin-x64 node-v10.16.0

USAGE
  $ henesis [COMMAND]

COMMANDS
  changepw     change password
  help         display help for henesis
  init         create the folder structure required for your project
  integration  manage integrations
  login        perform a login
  logout       perform a logout
  nft          manage nft api
  node         manage trusted nodes
```



### How to Setup Henesis AutoComplete

```
$ henesis autocomplete
```

Enter the following script according to your shell type.

zsh: 
> $ printf "$(henesis autocomplete:script zsh)" >> ~/.zshrc; source ~/.zshrc


bash:
> $ printf "$(henesis autocomplete:script bash)" >> ~/.bashrc; source ~/.bashrc



## Usage

### account

*_**You must be logged in to use this features.**_*

```
manage your account

USAGE
  $ henesis account:COMMAND

COMMANDS
  account:changepw  change account password
  account:describe  describe account information
```



#### account:changepw

##### Command Line

```
$ henesis account:changepw
Password: ******
New Password: ******
Again New Password: ******
🦄 Password changed!
```



#### account:describe

##### Command Line

```
$ henesis account:describe
Email: haechi@haechi.io
Name: haechi
Organization: haechi-labs
clientId: 49e77d0be585ef71c337f758e61e1f16
```

------

### help

Use help as:

```
  $ henesis help [COMMAND]
```

For example, you can call `help` about `integration:delete` command like:

```
$ henesis help integration:delete
delete a integration

USAGE
  $ henesis integration:delete [INTEGRATIONID]

EXAMPLE
  $ henesis integration:delete my-integration-id
```

------

### init

*_**The directory in which the init command is run must be empty.**_*

```
$ henesis init -n sample-project
sample-project directory has been created.
```

**After this, the following folder structure is created.**

```
sample_project
├── contracts
│   └── example.sol
└── henesis.yaml
```

------

### integration

*_**You can use command where the henesis.yaml file exists.**_*

```
$ henesis integration
manage integrations

USAGE
  $ cli integration:COMMAND

COMMANDS
  integration:delete    delete a integration
  integration:deploy    deploy a integration
  integration:describe  describe a integration
  integration:status    get integrations
  integration:usage     show event streamer statistics
```

There are tasks to be done before the deploy command.

- Place the contract file distributed in Blockchain inside the contract directory.
- Modify the henesis.yaml file to match the event you want to subscribe to and place the file with logic in the handler directory.
- You can run the deploy command and check the status of the distribution through the status command.



#### integration:delete

##### Command Line

```
$ henesis integration:delete <integrationId>
```



#### integration:deploy

##### Command Line

```
$ henesis integration:deploy
```

##### Options

- `-f` or `--force`: Erase existing deployed content and deploy current configuration.
- `-p` or `--path`: Specify where henesis.yaml is located.



#### integration:describe

##### Command Line

```
henesis integration:describe <integrationId>
```



#### integration:status

##### Command Line

```
henesis integration:status
```



#### integration:describe

##### Command Line

```
henesis integration:describe <integrationId>
```
------

### login

```
$ henesis login
Allow Henesis to collect anonymous CLI usage and error reporting information
yes(y) or no(n): y
email: yoonsung@haechi.io
password: ***********

🎉 Login Success from yoonsung@haechi.io 🎉
```

------

### logout

```
$ henesis logout
🤗 Logout Success 👍
```

------
### node

```	
manage trusted nodes

USAGE
  $ henesis node:COMMAND

COMMANDS
  node:status  show truested node information
  node:usage   show truested node statistics
```

#### node:status

##### Command Line

```
$ henesis node:status
Platform     Network   Endpoint
ethereum     mainnet   https://tn.henesis.io/ethereum/mainnet
ethereum     ropsten   https://tn.henesis.io/ethereum/ropsten
ethereum     rinkeby   https://tn.henesis.io/ethereum/rinkeby
```

#### node:usage	

##### Command Line

```
$ henesis node:usage
Henesis Trusted Node (Ethereum) Statistics

Total rpc call of this month: 226,233,096
This command shows the trusted node usage this month(The stat is updated every hour).
The daily statistic is added at UTC+0.
Date         Usage        Bandwidth
2019-12-04   27,105,464   75.96 GB
2019-12-03   107,220,983  300.35 GB
2019-12-02   51,677,543   135.39 GB
2019-12-01   40,229,106   107.58 GB
```
---

### nft

```
manage nft api

USAGE
  $ henesis nft:COMMAND

COMMANDS
  nft:usage  show nft api statistics
```

#### nft:usage	

##### Command Line

```
$ henesis nft:usage
Henesis NFT API (Ethereum) Statistics

Total api call of this month: 25,904
This command shows the nft api usage this month.
Date         Usage        
2020-02-05   6,250        
2020-02-04   11,500       
2020-02-03   8,154     
```

---

## About henesis.yaml

### webSocket

```yaml
name: sample
version: v1    # (TBD) The version of this yaml file.
apiVersion: v1 # (TBD) The version of Henesis api. The type of message you receive can be changed depending on this version.

blockchain:
  platform: ethereum
  network: mainnet
  threshold: 12 # optional.
                # Ethereum: (default: 12, min: 6)
                # Klaytn: (default: 0, min: 0)

filters:
  contracts:
    - address: '0x'
      name: example
      files: # The events of the contracts listed below can be combined together at this address.
        - path: ./contracts/example.sol
          contractName: example
          compilerVersion: 0.5.8

provider:
  type: webSocket
```



### webhook

```yaml
name: sample
version: v1    # (TBD) The version of this yaml file.
apiVersion: v1 # (TBD) The version of Henesis api. The type of message you receive can be changed depending on this version.

blockchain:
  platform: ethereum
  network: mainnet
  threshold: 12 # optional.
                # Ethereum: (default: 12, min: 6)
                # Klaytn: (default: 0, min: 0)

filters:
  contracts:
    - address: '0x'
      name: example
      files: # The events of the contracts listed below can be combined together at this address.
        - path: ./contracts/example.sol
          contractName: example
          compilerVersion: 0.5.8

provider:
  type: webhook
  url: https://localhost:8080
  method: POST
  headers:
    Authorization: 'Bearer YOUR-OWN-TOKEN'
```



## Parameter Details

The following are detailed explanations for parameters used to `henesis.yaml`.

### version & name

The `version` and `name` are used as delimiters to identify the project. The `name` must consist only of lowercase letters, numbers, '-' and '.', the maximum length is 253 characters.

### apiVersion

The `apiVersion` is the version of Henesis api. The type of message you receive can be changed depending on this version.

------

### blockchain

The blockchain part is an area that describes the platform and network name of the blockchain in which the smart contract to e subscribed is deployed.

##### platform

The blockchain platform you want to use. 

We support now

- `ethereum`
- `klaytn`

##### network

The blockchain network you want to use.

We support now below chains.

| platform | network | chain           |
| -------- | ------- | --------------- |
| ethereum | mainnet | mainnet         |
| ethereum | ropsten | ropsten testnet |
| ethereum | rinkeby | rinkeby testnet |
| klaytn   | mainnet | cypress mainnet |
| klaytn   | baobob  | baobob testnet  |

##### threshold

Minimum confirmation thresohld which you want to received.

> Caution : when receiving data, we wait for a threshold of block confirmation.

------

### filters

The filters part is about information for the smart contracts you want to subscribe through Henesis. 

> You can subscribe to more than one contract.

##### contracts

###### address

An address of the deployed smart contract

###### name

A name of the contract filter

##### files

###### path

A file path of the smart contract source code

###### contractName

A name of the contract to subscribe in the source code

###### compilerVersion

A solidity compiler version. Must be identical to the compiler version at the time of deployment.

------

### provider

The provider is where you choose how to receive events from Henesis. We support `WebSocket` and `Webhook`

The `WebSocket` doesn't need any settings like url, method, headers.

##### type

`WebSocket` or `Webhook`

##### url

URL which you want to hook

##### method

HTTP method like a `GET`, `POST`, `PUT`, `DELETE`

##### headers

###### Authorization

If you want to set authorization (like a `JWT`), you can set authorization

> We also support [tutorial](https://docs.henesis.io/subscribing-events/deploy-integration#henesis-yaml).
