import { Pipe, PipeTransform } from '@angular/core';
import { Shapes, ShapeService } from '@services/shape.service';

@Pipe({
  name: 'points',
})
export class PointsPipe implements PipeTransform {

  constructor(private shapeService: ShapeService) {}

  transform(shape: Shapes): string {
    return this.shapeService.getPoints(shape);
  }
}
