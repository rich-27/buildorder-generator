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

  buildOrders: string[];
  buildOrderIndex = 0;
  buildOrder: BuildOrder = null;

  constructor(private buildOrderService: BuildOrderService) {
  }

  ngOnInit(): void {
    this.buildOrders = this.buildOrderService.getList();
    this.changeBuildOrder(0);
  }

  changeBuildOrder(dir: number, e?: any): void {
    if ((e !== undefined) && (e.target.classList.contains('disabled'))) { return; }
    this.buildOrderIndex = Math.min(Math.max(this.buildOrderIndex + dir, 0), this.buildOrders.length - 1);
    this.buildOrder = this.buildOrderService.getBuildOrder(this.buildOrders[this.buildOrderIndex]);
  }

  isStringArray(s: string | string[]): s is string[] {
    return (s as string[]).join !== undefined;
  }

  join(s: string | string[] = '', separator: string): string {
    return (this.isStringArray(s) ? s.join(separator) : s);
  }

  joinTimes(s: number[], separator: string): string {
    return s.filter(num => num !== undefined).map(num => this.toTime(num)).join(separator);
  }

  replace(s: string, replacements: [string, string][]): string {
    let str = s;
    replacements.forEach(r => {
      str = str.replace(r[0], r[1]);
    });
    return str;
  }

  toTime(seconds: number): string {
    if (seconds === undefined) { return undefined; }
    const format = val => `0${Math.floor(val)}`.slice(-2);
    const minutes = (seconds % 3600) / 60;
    return [minutes, seconds % 60].map(format).join(':');
  }

  firstorlast<T>(checks: [entry: T, array: T[]][]): string {
    return [
      (checks.every(c => c[1][0] === c[0]) ? 'first' : ''),
      (checks.every(c => c[1][c[1].length - 1] === c[0]) ? 'last' : '')
    ].join(' ');
  }
}
