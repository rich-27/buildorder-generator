import { BuildOrderSchema, Jobs, StepSchema, VilStepSchema, MilStepSchema, AgeUpStepSchema, StepSchemaChecker } from './schema';
import { BuildOrders } from './build-orders';
import { Injectable } from '@angular/core';
import { noop } from 'rxjs';

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
    let lastVilIndex = 0;

    return schemaSteps.map<Step>((s, si) => {
      let actions = [];
      if (StepSchemaChecker.isVilStepSchema(s)) {
        actions = Array.from({length: s.vils}, (_, i) => ActionFactory.makeVil(
          lastVilIndex + (s.from === undefined ? i + 1 : 0),
          s.job,
          s.from));
        if (s.from === undefined) { lastVilIndex += s.vils; }
      }
      else if (StepSchemaChecker.isMilStepSchema(s)) {
        actions = Array(s.units).fill(0).map(() => ActionFactory.makeMil());
      }
      else if (StepSchemaChecker.isAgeUpStepSchema(s)) { actions = [ActionFactory.ageUp()]; }
      return {
        text: s.text,
        actions,
        time: (s as AgeUpStepSchema).time,
        additionalText: s.additionalText
      };
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
  actions: Action[];
  time?: number;
  additionalText?: string|string[];
}

export class Action {
  type: string;
}
export class Vil extends Action {
  num: number;
  job: Jobs;
  from?: Jobs;
}

class ActionFactory {
  static makeVil(num: number, job: Jobs, from?: Jobs): Vil {
    return { type: 'vil', num, job, from };
  }
  static ageUp(): Action {
    return {
      type: 'age-up'
    };
  }
  static makeMil(): Action {
    return {
      type: 'make-unit'
    };
  }
}

export class ActionChecker {
  static isVil(action: Action): action is Vil {
    if (action.type !== 'vil') { return false; }
    if ((action as Vil).num === undefined) { return false; }
    if ((action as Vil).job === undefined) { return false; }
    return true;
  }
  static isAgeUp(action: Action): boolean { return action.type === 'age-up'; }
  static isMakeMil(action: Action): boolean { return action.type === 'make-unit'; }
}
