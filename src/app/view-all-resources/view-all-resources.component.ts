import { Component } from '@angular/core';



@Component({
  selector: 'app-view-all-resources',
  templateUrl: './view-all-resources.component.html',
  styleUrls: ['./view-all-resources.component.css'],
})
export class ViewAllResourcesComponent {
  tableData: any[] = [
    ['45677388', 'Jasmin', 'gdgf@gmail.com', 'Angular'],
    ['23255678', 'Saumya', 'hhjhjkn@gmail.com', 'Java'],
    ['45677388', 'Pavithra', 'gyuerhh@gmail.com', 'Python'],
    ['45677388', 'Himanshu', 'gegchk@gmail.com', 'SQL'],
  ];
}
