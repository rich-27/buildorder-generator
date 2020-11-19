import { Component, OnInit } from '@angular/core';

import { Jobs } from '../schema';
import { BuildOrder, BuildOrderService } from './../build-order.service';

@Component({
  selector: 'app-build-order',
  templateUrl: './build-order.component.html',
  styleUrls: ['./build-order.component.scss']
})
export class BuildOrderComponent implements OnInit {
  stringify = JSON.stringify;

  showFull = false;

  iconType = Jobs.Shepherd;

  buildOrder: BuildOrder = null;

  constructor(private buildOrderService: BuildOrderService) {
  }

  ngOnInit(): void {
    this.buildOrder = this.buildOrderService.getBuildOrder(this.buildOrderService.getList()[0]);
  }

  join(s: string|string[] = '', separator: string): string {
    return (s as string[]).join !== undefined ? (s as string[]).join(separator) : s as string;
  }

  replace(s: string, replacements: [string, string][]): string {
    let str = s;
    replacements.forEach(r => {
      str = str.replace(r[0], r[1]);
    });
    return str;
  }

  toTime(seconds: number): string {
    const format = val => `0${Math.floor(val)}`.slice(-2);
    const minutes = (seconds % 3600) / 60;
    return [minutes, seconds % 60].map(format).join(':');
  }
}
