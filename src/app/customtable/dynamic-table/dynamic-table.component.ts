import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/service/car.service';
import { Car } from 'src/app/domain/car';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.css']
})
export class DynamicTableComponent implements OnInit {

  cars: Car[];

  cols: any[];

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.cars = this.carService.getCarsSmall();

    this.cols = [
      { field: 'vin', header: 'Vin' },
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' }
    ];
    
  }

}
