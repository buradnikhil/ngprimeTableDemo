import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/domain/car';
import { CarService } from 'src/app/service/car.service';
import { SelectItem } from 'src/app/domain/selectitem';

@Component({
  selector: 'app-filter-table',
  templateUrl: './filter-table.component.html',
  styleUrls: ['./filter-table.component.css']
})
export class FilterTableComponent implements OnInit {
  cars: Car[];

  cols: any[];

  brands: SelectItem[];

  colors: SelectItem[];

  yearFilter: number;

  yearTimeout: any;

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.cars = this.carService.getCarsMedium();

    this.brands = [
      { label: 'All Brands', value: null },
      { label: 'Audi', value: 'Audi' },
      { label: 'BMW', value: 'BMW' },
      { label: 'Fiat', value: 'Fiat' },
      { label: 'Honda', value: 'Honda' },
      { label: 'Jaguar', value: 'Jaguar' },
      { label: 'Mercedes', value: 'Mercedes' },
      { label: 'Renault', value: 'Renault' },
      { label: 'VW', value: 'VW' },
      { label: 'Volvo', value: 'Volvo' }
    ];

    this.colors = [
      { label: 'White', value: 'White' },
      { label: 'Green', value: 'Green' },
      { label: 'Silver', value: 'Silver' },
      { label: 'Black', value: 'Black' },
      { label: 'Red', value: 'Red' },
      { label: 'Maroon', value: 'Maroon' },
      { label: 'Brown', value: 'Brown' },
      { label: 'Orange', value: 'Orange' },
      { label: 'Blue', value: 'Blue' }
    ];

    this.cols = [
      { field: 'vin', header: 'Vin' },
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' }
    ];
  }

  onYearChange(event, dt)
  {
    if (this.yearTimeout) {
      clearTimeout(this.yearTimeout);      
    }

    this.yearTimeout =  setTimeout(() => {
      dt.filter(event.value, 'year', 'gt');

    }, 250);

  }

}
