import { Component, OnInit } from '@angular/core';
import { Groupcar } from 'src/app/domain/groupcars';
import { CarService } from 'src/app/service/car.service';

@Component({
  selector: 'app-row-group-table',
  templateUrl: './row-group-table.component.html',
  styleUrls: ['./row-group-table.component.css']
})
export class RowGroupTableComponent implements OnInit {
  cars: Groupcar[];

  rowGroupMetadata: any;

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.cars = this.carService.getCarsMedium();
    this.updateRowGroupMetaData();
  }
  onSort() {
    this.updateRowGroupMetaData();
  }

  updateRowGroupMetaData() {
    this.rowGroupMetadata = {};

    if (this.cars) {
      for (let i = 0; i < this.cars.length; i++) {
        let rowData = this.cars[i];
        let brand = rowData.brand;

        if (i == 0) {
          this.rowGroupMetadata[brand] = { index: 0, size: 1 }
        }
        else {
          let previousRowData = this.cars[i - 1];
          let previousRowGroup = previousRowData.brand;
          if (brand === previousRowGroup) {
            this.rowGroupMetadata[brand].size++;
          }
          else
            this.rowGroupMetadata[brand] = { index: i, size: 1 }
        }
      }

    }
  }

}
