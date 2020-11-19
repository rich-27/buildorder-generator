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
  additionalText?: string | string[];
}

export class VilStepSchema extends StepSchema {
  vils: number;
  job: Jobs;
  from?: Jobs;
}
export class MilStepSchema extends StepSchema {
  units: number;
}
export class AgeUpStepSchema extends StepSchema {
  time: number;
}

export class StepSchemaChecker {
  static isVilStepSchema(step: StepSchema): step is VilStepSchema {
    if ((step as VilStepSchema).vils === undefined) { return false; }
    if ((step as VilStepSchema).job === undefined) { return false; }
    return true;
  }
  static isMilStepSchema(step: StepSchema): step is MilStepSchema {
    if ((step as MilStepSchema).units === undefined) { return false; }
    return true;
  }
  static isAgeUpStepSchema(step: StepSchema): step is AgeUpStepSchema {
    if ((step as AgeUpStepSchema).time === undefined) { return false; }
    return true;
  }
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
