export type DBCollection = 'markets' | 'track' | 'trades';

export type TrackObject = Record<string, string>;

export interface IMarketItem {
  marketId: string;
  poolId: string;
  poolOpenTime: number;
  baseMint: string;
}

export interface ITrade {
  baseMint: string;
  buyAmount: number;
  baseAmount: string;
  buyTimestamp: number;
  sellAmount?: number;
  sellTimestamp?: number;
  profit?: number;
}

export interface DBStructures {
  markets?: Record<string, IMarketItem>;
  track?: TrackObject;
  trades?: Record<string, ITrade>;
}

export type DBStructure<K extends keyof DBStructures = keyof DBStructures> = {
  [P in K]: DBStructures[P];
}[K];

export type DBValueSets = {
  markets: IMarketItem;
  track: string;
  trades: ITrade;
};

export type DBValueSet<K extends keyof DBValueSets = keyof DBValueSets> = {
  [P in K]: DBValueSets[P];
}[K];
