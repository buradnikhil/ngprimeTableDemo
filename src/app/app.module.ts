import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  TableModule} from 'primeng/table';
import { BasicTableComponent } from './customtable/basic-table/basic-table.component';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { DynamicTableComponent } from './customtable/dynamic-table/dynamic-table.component';
import { SectionTableComponent } from './customtable/section-table/section-table.component';
import { ColumnGroupTableComponent } from './customtable/column-group-table/column-group-table.component';
import { RowGroupTableComponent } from './customtable/row-group-table/row-group-table.component';
import { TablePageDemoComponent } from './customtable/table-page-demo/table-page-demo.component';
import { FilterTableComponent } from './customtable/filter-table/filter-table.component';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import {SliderModule} from 'primeng/slider';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { TableRowselectionComponent } from './customtable/table-rowselection/table-rowselection.component';
import { ToastModule } from 'primeng/toast';
// import { MessageService  } from './service/message.service';



@NgModule({
  declarations: [
    AppComponent,
    BasicTableComponent,
    DynamicTableComponent,
    SectionTableComponent,
    ColumnGroupTableComponent,
    RowGroupTableComponent,
    TablePageDemoComponent,
    FilterTableComponent,
    TableRowselectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    SliderModule,
    DropdownModule,
    MultiSelectModule,
    ToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
