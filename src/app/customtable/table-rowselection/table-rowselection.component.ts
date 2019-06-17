import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/domain/car';
import { CarService } from 'src/app/service/car.service';
import { MessageService } from 'src/app/service/message.service';

@Component({
  selector: 'app-table-rowselection',
  templateUrl: './table-rowselection.component.html',
  styleUrls: ['./table-rowselection.component.css'],
})
export class TableRowselectionComponent implements OnInit {

  cars: Car[];

  cols: any[];

  selectedCar1: Car;

  selectedCar2: Car;

  selectedCar3: Car;

  selectedCar4: Car;

  selectedCars1: Car[];

  selectedCars2: Car[];

  selectedCars3: Car[];


  constructor(private carService: CarService, private messageService: MessageService) { }

  ngOnInit() {
    this.cars = this.carService.getCarsSmall();

    this.cols = [
      { field: 'vin', header: 'Vin' },
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' }
    ];
  }

  selectCarWithButton(car: Car) {
    this.selectedCar2 =  car;
    this.messageService.add({severity:'info', summary : 'car Selected', detail: 'Vin'+ car.vin});
  }

  onRowSelect(event)
  {
    this.messageService.add({severity:'info', summary : 'car Selected', detail: 'Vin'+ event.data.vin});
  }

  onRowUnSelect(event) {
    this.messageService.add({severity:'info', summary : 'Car Unselected', detail: 'Vin'+ event.data.vin});

  }

}
