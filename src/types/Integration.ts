import 'reflect-metadata';

export enum PlatformType {
  ETHEREUM = 'ethereum',
  KLAYTN = 'klaytn',
}

export enum NetworkType {
  MAINNET = 'mainnet',
  ROPSTEN = 'ropsten',
  BAOBAB = 'baobab',
}

export class Provider {
  public type: string;
  public url?: string;
  public method?: string;
  public headers?: { [key: string]: string };
  public timeout?: number;

  public constructor(
    type: string,
    url?: string,
    method?: string,
    headers?: { [p: string]: string },
    timeout?: number,
  ) {
    this.type = type;
    this.url = url;
    this.method = method;
    this.headers = headers;
    this.timeout = timeout;
  }
}

export class Filter {
  public contracts: Contract[];

  public constructor(contracts: Contract[]) {
    this.contracts = contracts;
  }
}

export class Blockchain {
  public platform: PlatformType;
  public network: NetworkType;
  public threshold: number;

  public constructor(
    platform: PlatformType,
    network: NetworkType,
    threshold: number,
  ) {
    this.platform = platform;
    this.network = network;
    this.threshold = threshold;
  }
}

export class Contract {
  public name: string;
  public address: string;
  public abi: any;

  public constructor(name: string, address: string, abi: any) {
    this.name = name;
    this.address = address;
    this.abi = abi;
  }
}

export class UpdateIntegrationRequest {
  public version: string;
  public blockchain: Blockchain;
  public filter: Filter;
  public provider: Provider;
  public metadata: Map<string, Object>;

  public constructor(
    version: string,
    blockchain: Blockchain,
    filter: Filter,
    provider: Provider,
    metadata: Map<string, Object>,
  ) {
    this.version = version;
    this.blockchain = blockchain;
    this.filter = filter;
    this.provider = provider;
    this.metadata = metadata;
  }
}

export class CreateIntegrationRequest {
  public name: string;
  public version: string;
  public blockchain: Blockchain;
  public filter: Filter;
  public provider: Provider;
  public metadata: Map<string, Object>;

  public constructor(
    name: string,
    version: string,
    blockchain: Blockchain,
    filter: Filter,
    provider: Provider,
    metadata: Map<string, Object>,
  ) {
    this.name = name;
    this.version = version;
    this.blockchain = blockchain;
    this.filter = filter;
    this.provider = provider;
    this.metadata = metadata;
  }
}

export class Integration {
  public integrationId: string;
  public userId: number;
  public name: string;
  public version: string;
  public blockchain: Blockchain;
  public filter: Filter;
  public provider: Provider;
  public status: Status;
  public metadata: Map<string, Object>;

  public constructor(
    integrationId: string,
    userId: number,
    name: string,
    version: string,
    blockchain: Blockchain,
    filter: Filter,
    provider: Provider,
    status: Status,
    metadata: Map<string, Object>,
  ) {
    this.integrationId = integrationId;
    this.userId = userId;
    this.name = name;
    this.version = version;
    this.blockchain = blockchain;
    this.filter = filter;
    this.provider = provider;
    this.status = status;
    this.metadata = metadata;
  }
}

export class Status {
  public state: string;

  public constructor(state: string) {
    this.state = state;
  }
}
