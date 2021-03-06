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

  public constructor(
    type: string,
    url?: string,
    method?: string,
    headers?: { [p: string]: string },
  ) {
    this.type = type;
    this.url = url;
    this.method = method;
    this.headers = headers;
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
  public threshold?: number;

  public constructor(
    platform: PlatformType,
    network: NetworkType,
    threshold?: number,
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
  public apiVersion: string;
  public blockchain: Blockchain;
  public filter: Filter;
  public provider: Provider;

  public constructor(
    version: string,
    apiVersion: string = 'v1',
    blockchain: Blockchain,
    filter: Filter,
    provider: Provider,
  ) {
    this.version = version;
    this.apiVersion = apiVersion;
    this.blockchain = blockchain;
    this.filter = filter;
    this.provider = provider;
  }
}

export class CreateIntegrationRequest {
  public name: string;
  public version: string;
  public apiVersion: string;
  public blockchain: Blockchain;
  public filter: Filter;
  public provider: Provider;

  public constructor(
    name: string,
    version: string,
    apiVersion: string = 'v1',
    blockchain: Blockchain,
    filter: Filter,
    provider: Provider,
  ) {
    this.name = name;
    this.version = version;
    this.apiVersion = apiVersion;
    this.blockchain = blockchain;
    this.filter = filter;
    this.provider = provider;
  }
}

export class SubscriptionStat {
  public id: string;
  public eventCount: number;

  public constructor(id: string, eventCount: number) {
    this.id = id;
    this.eventCount = eventCount;
  }
}

export class IntegrationStat {
  public integrationId: string;
  public subscriptions: SubscriptionStat[];

  public constructor(integrationId: string, subscriptions: SubscriptionStat[]) {
    this.integrationId = integrationId;
    this.subscriptions = subscriptions;
  }
}

export class Integration {
  public integrationId: string;
  public userId: number;
  public name: string;
  public version: string;
  public apiVersion: string;
  public blockchain: Blockchain;
  public filter: Filter;
  public provider: Provider;
  public status: Status;

  public constructor(
    integrationId: string,
    userId: number,
    name: string,
    version: string,
    apiVersion: string,
    blockchain: Blockchain,
    filter: Filter,
    provider: Provider,
    status: Status,
  ) {
    this.integrationId = integrationId;
    this.userId = userId;
    this.name = name;
    this.version = version;
    this.apiVersion = apiVersion;
    this.blockchain = blockchain;
    this.filter = filter;
    this.provider = provider;
    this.status = status;
  }
}

export class Status {
  public state: string;

  public constructor(state: string) {
    this.state = state;
  }
}

export class SubscriptionUsage {
  public subscriptionId: string;
  public events: string;

  public constructor(subscriptionId: string, events: string) {
    this.subscriptionId = subscriptionId;
    this.events = events;
  }
}
