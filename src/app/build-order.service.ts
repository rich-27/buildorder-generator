import { BuildOrderSchema, Jobs, StepSchema } from './schema';
import { BuildOrders } from './build-orders';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BuildOrderService {

  constructor() { }

  public getList() {
    return [...BuildOrders.keys()];
  }

  public getBuildOrder(buildOrder: string) {
    return this.convertBuildOrder(BuildOrders.get(buildOrder));
  }

  private convertBuildOrder(buildOrder: BuildOrderSchema): BuildOrder {
    return {
      title: buildOrder.title,
      attribution: buildOrder.attribution,
      feudalPop: buildOrder.feudalPop,
      castlePop: buildOrder.castlePop,
      perfectTime: buildOrder.perfectTime,
      averageTime: buildOrder.averageTime,
      steps: this.convertStepSchema(buildOrder.steps)
    };
  }

  private convertStepSchema(schemaSteps: StepSchema[]): Step[] {
    let vilTotal = 0;
    const vilNums: number[] = [0];
    for (const sstep of schemaSteps) {
      if (!sstep.from) { vilTotal += sstep.vils; }
      vilNums.push(vilTotal);
    }

    return schemaSteps.map<Step>((s, si) => {
      const step: Step = {
        text: s.text,
        vils: Array(s.vils).fill(0).map((_, vi) => {
          const vil: Vil = {
            num: vilNums[si] + (!s.from ? vi : -1),
            job: s.job
          };
          if (s.from) { vil.from = s.from; }
          return vil;
        })
      };
      if (s.time) { step.time = s.time; }
      if (s.additionalText) { step.additionalText = s.additionalText; }
      return step;
    });
  }
}

export class BuildOrder {
  title: string;
  attribution: string;
  feudalPop: number;
  castlePop: number;
  perfectTime: number;
  averageTime: number;
  steps: Step[];
}

export class Step {
  text: string;
  vils: Vil[];
  time?: number;
  additionalText?: string|string[];
}

export class Vil {
  num: number;
  job?: Jobs;
  from?: Jobs;
}
