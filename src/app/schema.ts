export class BuildOrderSchema {
  title: string;
  attribution: string;
  feudalPop: number;
  castlePop: number;
  perfectTime: number;
  averageTime: number;
  steps: StepSchema[];
}

export class StepSchema {
  text: string;
  vils: number;
  job?: Jobs;
  from?: Jobs;
  time?: number;
  additionalText?: string|string[];
}

export enum Jobs {
  Shepherd,
  Farmer,
  BerryPicker,
  Hunter,
  BoarLurer,
  Lumberjack,
  GoldMiner,
  StoneMiner,
  Builder
}

// export enum Jobs {
//   Shepherd = 'shepherd',
//   Farmer = 'farmer',
//   BerryPicker = 'berry-picker',
//   Hunter = 'hunter',
//   BoarLurer = 'boar-lurer',
//   Lumberjack = 'lumberjack',
//   GoldMiner = 'gold-miner',
//   StoneMiner = 'stone-miner',
//   Builder = 'builder'
// }
