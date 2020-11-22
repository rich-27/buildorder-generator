import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShapeService {

  private shapesToPoints: { [key in Shapes]: string } = {
    [Shapes.DIAMOND]: this.makeShape(4, 8, StartAngles.RIGHT),
    [Shapes.TRIANGLE]: this.makeShape(3, 8, StartAngles.TOP),
    [Shapes.PENTAGON]: this.makeShape(5, 8, StartAngles.TOP),
    [Shapes.RECTANGLE]: this.makeShape(4, 8, StartAngles.BOTTOM_RIGHT),
    [Shapes.CIRCLE]: null,
    [Shapes.RIGHT_ARROW]: '10,3 18,10 10,17 10,13 2,13 2,7 10,7',
    [Shapes.UP_ARROW]: '10,2 17,10 13,10 13,18 7,18 7,10 3,10',
    // [Shapes.SWORDS, '2,2 3,2 10,9 17,2 18,2 18,3, 11,10 18,17 18,18 17,18 10,11 3,18 2,18 2,17 9,10 2,3']
    [Shapes.SWORD]: '2,8 3,8 7,12 17,2 18,2 18,3, 8,13 12,17 12,18 11,18 7,14 3,18 2,18 2,17 6,13 2,9'
  };

  getPoints(shape: Shapes): string {
    return this.shapesToPoints[shape];
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

enum StartAngles {
  RIGHT = 0,
  BOTTOM_RIGHT = Math.PI / 4,
  BOTTOM = Math.PI / 2,
  BOTTOM_LEFT = 3 * Math.PI / 4,
  LEFT = Math.PI,
  TOP_LEFT = 5 * Math.PI / 4,
  TOP = 3 * Math.PI / 2,
  TOP_RIGHT = 7 * Math.PI / 4
}

export enum Shapes {
  DIAMOND,
  CIRCLE,
  TRIANGLE,
  PENTAGON,
  RECTANGLE,
  RIGHT_ARROW,
  UP_ARROW,
  SWORD
}
