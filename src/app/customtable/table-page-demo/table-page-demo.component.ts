import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/service/car.service';
import { Car } from 'src/app/domain/car';

@Component({
  selector: 'app-table-page-demo',
  templateUrl: './table-page-demo.component.html',
  styleUrls: ['./table-page-demo.component.css']
})
export class TablePageDemoComponent implements OnInit {

  cars: Car[];

  cols: any[];

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.cars =  this.carService.getcarsForPagination();
    this.cols = [
      { field: 'vin', header: 'Vin' },
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' }
  ];
  }

}
