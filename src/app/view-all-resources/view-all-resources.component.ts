import { Component } from '@angular/core';
import { ViewAllServiceService } from '../view-all-service.service';

@Component({
  selector: 'app-view-all-resources',
  templateUrl: './view-all-resources.component.html',
  styleUrls: ['./view-all-resources.component.css'],
})
export class ViewAllResourcesComponent {
  constructor(private dataService: ViewAllServiceService) {}

  tableData: any;

  ngOnInit() {
    this.foo();
  }
  
  foo() {
    this.dataService.getUser().subscribe((response: any[]) => {
      this.tableData = response;
      console.log(this.tableData);
    });
  }
}
