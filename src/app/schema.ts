export enum AppendOptions { VILS, TIME }

export enum Jobs {
  SHEPHERD,
  FARMER,
  BERRY_PICKER,
  HUNTER,
  BOAR_LURER,
  LUMBERJACK,
  GOLD_MINER,
  STONE_MINER,
  BUILDER
}

export class BuildOrderSchema {
  title: string;
  attribution: string;
  feudalPop: number;
  castlePop: number;
  perfectTime: number;
  averageTime?: number;
  steps: AnyStepSchema[];
}

export interface StepSchema {
  text: string;
  append?: AppendOptions;
  additionalText?: string | string[];
}

export interface VilStepSchema extends StepSchema {
  vils: number;
  job: Jobs;
  from?: Jobs;
}
export interface MilStepSchema extends StepSchema {
  units: number;
}
export interface AgeUpStepSchema extends StepSchema {
  time: number;
}

export type AnyStepSchema = StepSchema & Partial<VilStepSchema> & Partial<MilStepSchema> & Partial<AgeUpStepSchema>;
export class StepSchemaChecker {
  static isVilStepSchema(step: StepSchema): step is VilStepSchema { return 'vils' in step && 'job' in step; }
  static isMilStepSchema(step: StepSchema): step is MilStepSchema { return 'units' in step; }
  static isAgeUpStepSchema(step: StepSchema): step is AgeUpStepSchema { return 'time' in step; }
}
