import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ChartsService } from '../services/charts.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  data: any;
  displayedColumns: string[];
  dataSource: any;

  constructor(private charts: ChartsService) { }

  ngOnInit(): void {
      this.displayedColumns = ['nombre', 'incidente', 'contacto', 'status'];
      this.charts.getAllIncident().subscribe((result) => { 
        console.log('res',result)
        this.dataSource = result
      });
  } 

}
