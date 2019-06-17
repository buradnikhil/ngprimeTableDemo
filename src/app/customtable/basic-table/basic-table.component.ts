import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/service/car.service';
import { Car } from 'src/app/domain/car';
import value from '*.json';

@Component({
  selector: 'app-basic-table',
  templateUrl: './basic-table.component.html',
  styleUrls: ['./basic-table.component.css']

})
export class BasicTableComponent implements OnInit {

  cars: Car[];

  constructor(private carService: CarService) {

  }

  ngOnInit() {
  this.cars = this.carService.getCarsSmall();
  }
}


