import { Jobs } from './../schema';
import { Action, Vil, ActionChecker } from './../build-order.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  jobs = Jobs;

  @Input() action: Action;

  useGradient = false;

  shape: string;
  colorClass: string;

  fromColorClass: string;
  jobColorClass: string;
  fillUrl: string;
  strokeUrl: string;

  constructor() { }

  ngOnInit(): void {
    if (ActionChecker.isVil(this.action)) {
      this.jobColorClass = JobLookup.jobsToColors.get(this.action.job);

      const retask = ((this.action as Vil).from !== undefined);
      this.shape = (retask ? Shapes.RightArrow : JobLookup.jobsToShapes.get(this.action.job));
      this.colorClass = this.jobColorClass;

      if (retask) {
        this.fromColorClass = JobLookup.jobsToColors.get(this.action.from);
        this.useGradient = (this.jobColorClass !== this.fromColorClass);
        if (this.useGradient) {
          this.colorClass = 'linear-gradient';
          this.fillUrl = this.fromColorClass + '→' + this.jobColorClass + 'FillGrad';
          this.strokeUrl = this.fromColorClass + '→' + this.jobColorClass + 'StrokeGrad';
        }
      }
    }
    else if (ActionChecker.isAgeUp(this.action)) {
      this.shape = Shapes.UpArrow;
      this.colorClass = 'other';
    }
    else if (ActionChecker.isMakeMil(this.action)) {
      this.shape = Shapes.Sword;
      this.colorClass = 'other';
    }
  }

  getPoints(shapeName: string): string {
    return ShapeLookup.shapesToPoints.get(shapeName as Shapes);
  }
}

enum Shapes {
  Diamond = 'diamond',
  Circle = 'circle',
  Triangle = 'triangle',
  Pentagon = 'pentagon',
  Rectangle = 'rectangle',
  RightArrow = 'right-arrow',
  UpArrow = 'up-arrow',
  Sword = 'swords'
}

enum Colors {
  Red = 'red',
  Green = 'green',
  Gold = 'gold',
  Grey = 'grey',
  Purple = 'purple'
}

class JobLookup {
  static jobsToShapes: Map<Jobs, Shapes> = new Map([
    [Jobs.Shepherd, Shapes.Diamond],
    [Jobs.Farmer, Shapes.Rectangle],
    [Jobs.BerryPicker, Shapes.Circle],
    [Jobs.Hunter, Shapes.Diamond],
    [Jobs.BoarLurer, Shapes.Diamond],
    [Jobs.Lumberjack, Shapes.Triangle],
    [Jobs.GoldMiner, Shapes.Pentagon],
    [Jobs.StoneMiner, Shapes.Pentagon],
    [Jobs.Builder, Shapes.Rectangle]
  ]);

  static jobsToColors: Map<Jobs, Colors> = new Map([
    [Jobs.Shepherd, Colors.Red],
    [Jobs.Farmer, Colors.Red],
    [Jobs.BerryPicker, Colors.Red],
    [Jobs.Hunter, Colors.Red],
    [Jobs.BoarLurer, Colors.Red],
    [Jobs.Lumberjack, Colors.Green],
    [Jobs.GoldMiner, Colors.Gold],
    [Jobs.StoneMiner, Colors.Grey],
    [Jobs.Builder, Colors.Purple]
  ]);
}
class ShapeLookup {
  static shapesToPoints: Map<Shapes, string> = new Map([
    [Shapes.Diamond, ShapeLookup.makeShape(4, 8, 0)],
    [Shapes.Triangle, ShapeLookup.makeShape(3, 8, 3 * Math.PI / 2)],
    [Shapes.Pentagon, ShapeLookup.makeShape(5, 8, 3 * Math.PI / 2)],
    [Shapes.Rectangle, ShapeLookup.makeShape(4, 8, Math.PI / 4)],
    [Shapes.RightArrow, '10,3 18,10 10,17 10,13 2,13 2,7 10,7'],
    [Shapes.UpArrow, '10,2 17,10 13,10 13,18 7,18 7,10 3,10'],
    // [Shapes.Swords, '2,2 3,2 10,9 17,2 18,2 18,3, 11,10 18,17 18,18 17,18 10,11 3,18 2,18 2,17 9,10 2,3']
    [Shapes.Sword, '2,8 3,8 7,12 17,2 18,2 18,3, 8,13 12,17 12,18 11,18 7,14 3,18 2,18 2,17 6,13 2,9']
  ]);

  private static makeShape(numPoints: number, radius: number, startAngle: number) {
    const points = [];
    const cx = 10;
    const cy = 10;
    for (let angle = startAngle; angle < startAngle + (2 * Math.PI); angle += 2 * Math.PI / numPoints) {
      points.push([parseFloat((cx + radius * Math.cos(angle)).toFixed(5)), parseFloat((cy + radius * Math.sin(angle)).toFixed(5))]);
    }
    return points.map(p => p.join(',')).join(' ');
  }
}
