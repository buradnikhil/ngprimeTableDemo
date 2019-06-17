import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/domain/car';
import { CarService } from 'src/app/service/car.service';

@Component({
  selector: 'app-section-table',
  templateUrl: './section-table.component.html',
  styleUrls: ['./section-table.component.css']
})
export class SectionTableComponent implements OnInit {

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
