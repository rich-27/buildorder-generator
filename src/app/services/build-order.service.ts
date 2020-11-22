import { BuildOrderSchema, Jobs, StepSchema, StepSchemaChecker, AppendOptions, AnyStepSchema } from 'src/app/schema';
import { BuildOrderNames, BUILD_ORDERS } from 'src/app/build-orders';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BuildOrderService {

  public getBuildOrders() {
    return Object.values(BUILD_ORDERS).map(b => this.convertBuildOrder(b));
  }

  public getBuildOrder(buildOrderName: BuildOrderNames): BuildOrder {
    return this.convertBuildOrder(BUILD_ORDERS[buildOrderName]);
  }

  private convertBuildOrder(buildOrder: BuildOrderSchema): BuildOrder {
    return {
      title: buildOrder.title,
      attribution: buildOrder.attribution,
      feudalPop: buildOrder.feudalPop,
      castlePop: buildOrder.castlePop,
      perfectTime: this.toTimeString(buildOrder.perfectTime),
      ...('averageTime' in buildOrder) && { averageTime: this.toTimeString(buildOrder.averageTime) },
      steps: this.convertStepSchema(buildOrder.steps)
    };
  }

  private convertStepSchema(schemaSteps: StepSchema[]): Step[] {
    let vilIndex = 0;
    return schemaSteps.map<Step>(step => ({
      text: this.getTextWithAppendages(step),
      actions: StepSchemaChecker.isVilStepSchema(step)
        ? Array.from({length: step.vils}, _ => ActionFactory.makeVil(
            ('from' in step ? vilIndex : (vilIndex += 1)),
            step.job,
            step.from))
        : (StepSchemaChecker.isMilStepSchema(step)
          ? Array(step.units).fill(0).map(() => ActionFactory.makeMil())
          : [ActionFactory.ageUp()]),
      ...(StepSchemaChecker.isAgeUpStepSchema(step)) && { time: this.toTimeString(step.time) },
      ...(step.additionalText !== undefined) && { additionalText: step.additionalText }
    }));
  }

  private toTimeString(seconds: number): string {
    if (seconds === undefined) { return '00:00'; }
    const format = (value: number) => `0${Math.floor(value)}`.slice(-2);
    const minutes = (seconds % 3600) / 60;
    return [minutes, seconds % 60].map(format).join(':');
  }

  private getTextWithAppendages(schema: AnyStepSchema): string {
    const bracket = (value: number | string) => `[${value}]`;
    return [schema.text,
      schema.append === AppendOptions.VILS ? bracket(schema?.vils) : null,
      schema.append === AppendOptions.TIME ? bracket(this.toTimeString(schema?.time)) : null,
    ].join(' ');
  }
}

export class BuildOrder {
  title: string;
  attribution: string;
  feudalPop: number;
  castlePop: number;
  perfectTime: string;
  averageTime: string;
  steps: Step[];
}

export class Step {
  text: string;
  actions: Action[];
  time?: string;
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

export class ActionChecker {
  static isVil(action: Action): action is Vil { return action.type === 'vil'; }
  static isAgeUp(action: Action): boolean { return action.type === 'age-up'; }
  static isMakeMil(action: Action): boolean { return action.type === 'make-unit'; }
}

class ActionFactory {
  static makeVil(num: number, job: Jobs, from?: Jobs): Vil { return { type: 'vil', num, job, from }; }
  static ageUp(): Action { return { type: 'age-up' }; }
  static makeMil(): Action { return { type: 'make-unit' }; }
}
