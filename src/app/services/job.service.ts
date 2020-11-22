import { Jobs } from 'src/app/schema';
import { Injectable } from '@angular/core';
import { Shapes } from './shape.service';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  private jobsToShapes: { [key in Jobs]: Shapes } = {
    [Jobs.SHEPHERD]: Shapes.DIAMOND,
    [Jobs.FARMER]: Shapes.RECTANGLE,
    [Jobs.BERRY_PICKER]: Shapes.CIRCLE,
    [Jobs.HUNTER]: Shapes.DIAMOND,
    [Jobs.BOAR_LURER]: Shapes.DIAMOND,
    [Jobs.LUMBERJACK]: Shapes.TRIANGLE,
    [Jobs.GOLD_MINER]: Shapes.PENTAGON,
    [Jobs.STONE_MINER]: Shapes.PENTAGON,
    [Jobs.BUILDER]: Shapes.RECTANGLE
  };

  private jobsToColors: { [key in Jobs]: Colors } = {
    [Jobs.SHEPHERD]: Colors.RED,
    [Jobs.FARMER]: Colors.RED,
    [Jobs.BERRY_PICKER]: Colors.RED,
    [Jobs.HUNTER]: Colors.RED,
    [Jobs.BOAR_LURER]: Colors.RED,
    [Jobs.LUMBERJACK]: Colors.GREEN,
    [Jobs.GOLD_MINER]: Colors.GOLD,
    [Jobs.STONE_MINER]: Colors.GREY,
    [Jobs.BUILDER]: Colors.PURPLE
  };

  getIconShape(job: Jobs): Shapes {
    return this.jobsToShapes[job];
  }

  getColor(job: Jobs): Colors {
    return this.jobsToColors[job];
  }
}

export enum Colors {
  RED = 'red',
  GREEN = 'green',
  GOLD = 'gold',
  GREY = 'grey',
  PURPLE = 'purple'
}
