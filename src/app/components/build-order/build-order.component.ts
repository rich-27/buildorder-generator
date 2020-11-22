import { Component, OnInit } from '@angular/core';
import { BuildOrderService, BuildOrder } from '@services/build-order.service';

@Component({
  selector: 'app-build-order',
  templateUrl: './build-order.component.html',
  styleUrls: ['./build-order.component.scss']
})
export class BuildOrderComponent implements OnInit {

  buildOrders: BuildOrder[];
  buildOrderIndex = 0;
  buildOrder: BuildOrder;

  constructor(private buildOrderService: BuildOrderService) {
  }

  ngOnInit(): void {
    this.buildOrders = this.buildOrderService.getBuildOrders();
    this.changeBuildOrder();
  }

  changeBuildOrder(dir: number = 0, e?: any): void {
    if ((e !== undefined) && (e.target.classList.contains('disabled'))) { return; }
    this.buildOrderIndex = Math.min(Math.max(this.buildOrderIndex + dir, 0), this.buildOrders.length - 1);
    this.buildOrder = this.buildOrders[this.buildOrderIndex];
  }

  firstorlast<T>(checks: [entry: T, array: T[]][]): string {
    return [
      (checks.every(c => c[1][0] === c[0]) ? 'first' : ''),
      (checks.every(c => c[1][c[1].length - 1] === c[0]) ? 'last' : '')
    ].join(' ');
  }
}
