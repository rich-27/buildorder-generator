import { Component, Input, OnInit } from '@angular/core';
import { Action, ActionChecker, Vil } from '@services/build-order.service';
import { JobService } from '@services/job.service';
import { Shapes } from '@services/shape.service';

@Component({
  selector: 'app-action-icon',
  templateUrl: './action-icon.component.html',
  styleUrls: ['./action-icon.component.scss']
})
export class ActionIconComponent implements OnInit {

  @Input() action: Action;

  readonly Shapes = Shapes;

  useGradient = false;

  shape: Shapes;
  colorClass: string;

  fromColorClass: string;
  jobColorClass: string;
  fillUrl: string;
  strokeUrl: string;

  constructor(private jobService: JobService) { }

  ngOnInit(): void {
    if (ActionChecker.isVil(this.action)) {
      this.jobColorClass = this.jobService.getColor(this.action.job);

      const retask = ((this.action as Vil).from !== undefined);
      this.shape = (retask ? Shapes.RIGHT_ARROW : this.jobService.getIconShape(this.action.job));
      this.colorClass = this.jobColorClass;

      if (retask) {
        this.fromColorClass = this.jobService.getColor(this.action.from);
        this.useGradient = (this.jobColorClass !== this.fromColorClass);
        if (this.useGradient) {
          this.colorClass = 'linear-gradient';
          this.fillUrl = this.fromColorClass + '→' + this.jobColorClass + 'FillGrad';
          this.strokeUrl = this.fromColorClass + '→' + this.jobColorClass + 'StrokeGrad';
        }
      }
    }
    else if (ActionChecker.isAgeUp(this.action)) {
      this.shape = Shapes.UP_ARROW;
      this.colorClass = 'other';
    }
    else if (ActionChecker.isMakeMil(this.action)) {
      this.shape = Shapes.SWORD;
      this.colorClass = 'other';
    }
  }
}
