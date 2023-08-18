

import { Component } from '@angular/core';

import { Router } from '@angular/router';

 

interface Resource {

  department: string;

}

 

export interface PeriodicElement {

  name: string;

  // position: number;

  //weight: number;

  // symbol: string;

}

 

const ELEMENT_DATA: PeriodicElement[] = [

  {name: 'MBRDI'},

  {name: 'Mcd'},

  {name: 'RMG'},

  {name: 'Dongler'},

  {name: 'PMO'},

  {name: 'Non-tech'},

  {name: 'FSD'},

];

 

@Component({

  selector: 'app-rmg-home',

  templateUrl: './rmg-home.component.html',

  styleUrls: ['./rmg-home.component.css']

})

 

export class RmgHomeComponent {

 

  expandedElement: Resource | null | undefined;

 

  constructor(private router:Router){}

 

  displayedColumns: string[] = ['name'];

  dataSource = ELEMENT_DATA;

 

addJDS() {

 

}

 

viewResources(){

  this.router.navigateByUrl("\viewResource");

}

removeResources(){}

 

addResources(){

  this.router.navigateByUrl("/addResource");

}

 

 

//   dataSource: Resource[] = [

//     { department: 'MBRDI' },

//     { department: 'RMG' },

//     { department: 'PMO' },

//     { department: 'NON-TECH' },

//     { department: 'Tech' }

//   ];

 

//   displayedColumns: string[] = ['department', 'actions'];

 

//   showData(resource: Resource) {

//     // Implement logic to show data for the selected resource

//   }

 

//   showDetails(resource: Resource) {

//     // Implement logic to show details for the selected resource

//   }

 

//   deleteResource(resource: Resource) {

//     // Implement logic to delete the selected resource

//   }

 

 

 

 

 

 

 

 

//   // displayedColumns: string[] = ['name'];

//   // dataSource = ELEMENT_DATA;

 

// addJDS() {

 

// }

 

// viewResources(){

//   this.router.navigateByUrl("\viewResource");

// }

// removeResources(){}

 

// addResources(){

//   this.router.navigateByUrl("/addResource");

// }

}

 