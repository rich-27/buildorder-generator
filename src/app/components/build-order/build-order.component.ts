import { Component, OnInit } from '@angular/core';
import { BuildOrderService, BuildOrder } from '@services/build-order.service';

@Component({
  selector: 'app-build-order',
  templateUrl: './build-order.component.html',
  styleUrls: ['./build-order.component.scss']
})
export class BuildOrderComponent implements OnInit {

  buildOrders: BuildOrder[];
  buildOrder: BuildOrder;

  get buildOrderIndex() { return this.buildOrders.indexOf(this.buildOrder); }
  get disablePreviousButton() { return this.buildOrderIndex === 0; }
  get disableNextButton() { return this.buildOrderIndex === this.buildOrders.length - 1; }

  constructor(private buildOrderService: BuildOrderService) {
  }

  ngOnInit(): void {
    this.buildOrders = this.buildOrderService.getBuildOrders();
    this.openBuildOrder();
  }

  openBuildOrder(index: number = 0): void {
    this.buildOrder = this.buildOrders[index];
  }
}
