import { inject } from '@angular/core/testing';
import { ShapeService } from '@services/shape.service';
import { PointsPipe } from './points.pipe';


describe('PointsPipe', () => {
  it('create an instance', inject([ ShapeService ], (shapeService: ShapeService) => {
    const pipe = new PointsPipe(shapeService);
    expect(pipe).toBeTruthy();
  }));
});
