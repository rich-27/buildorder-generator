import { Jobs } from './../schema';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  jobs = Jobs;

  @Input() type: Jobs = Jobs.Shepherd;
  @Input() from: Jobs;

  jobsToShapes: Map<Jobs, Shapes> = new Map([
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

  jobsToColors: Map<Jobs, Colors> = new Map([
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

  shapesToPoints: Map<Shapes, string> = new Map([
    [Shapes.Diamond, this.makeShape(4, 8, 0)],
    [Shapes.Triangle, this.makeShape(3, 8, 3 * Math.PI / 2)],
    [Shapes.Pentagon, this.makeShape(5, 8, 3 * Math.PI / 2)],
    [Shapes.Rectangle, this.makeShape(4, 8, Math.PI / 4)],
    [Shapes.Arrow, '10,3 18,10 10,17 10,13 2,13 2,7 10,7']
  ]);

  shape: string;

  fromColorClass: string;
  jobColorClass: string;
  fillUrl: string;
  strokeUrl: string;

  colorClass: string;

  constructor() { }

  ngOnInit(): void {
    if (this.from) {
      this.shape = Shapes.Arrow;
      this.colorClass = 'linear-gradient';
      this.fromColorClass = this.jobsToColors.get(this.from);
      this.jobColorClass = this.jobsToColors.get(this.type);
      this.fillUrl = this.fromColorClass + '→' + this.jobColorClass + 'FillGrad';
      this.strokeUrl = this.fromColorClass + '→' + this.jobColorClass + 'StrokeGrad';
    }
    else {
      this.shape = this.jobsToShapes.get(this.type);
      this.colorClass = this.jobsToColors.get(this.type);
    }
  }

  getShape(s: string): Shapes {
    return s as Shapes;
  }

  private makeShape(numPoints: number, radius: number, startAngle: number) {
    const points = [];
    const cx = 10;
    const cy = 10;
    for (let angle = startAngle; angle < startAngle + (2 * Math.PI); angle += 2 * Math.PI / numPoints) {
      points.push([parseFloat((cx + radius * Math.cos(angle)).toFixed(5)), parseFloat((cy + radius * Math.sin(angle)).toFixed(5))]);
    }
    return points.map(p => p.join(',')).join(' ');
  }
}

enum Shapes {
  Diamond = 'diamond',
  Circle = 'circle',
  Triangle = 'triangle',
  Pentagon = 'pentagon',
  Rectangle = 'rectangle',
  Arrow = 'arrow'
}

enum Colors {
  Red = 'red',
  Green = 'green',
  Gold = 'gold',
  Grey = 'grey',
  Purple = 'purple'
}
