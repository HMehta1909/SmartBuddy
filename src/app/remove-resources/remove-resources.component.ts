import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { removeService } from './removeService.service';
@Component({
  selector: 'app-remove-resources',
  templateUrl: './remove-resources.component.html',
  styleUrls: ['./remove-resources.component.css']
})



export class RemoveResourcesComponent {
[x: string]: any;

  constructor(private router:Router,private removeService: removeService ,private http: HttpClient, private route:ActivatedRoute) {
    // console.log("Nomination cons",this.nomination);
  }

  inputValue: string = '';

  del(id: any) {
    // Implement your delete logic here
    console.log('Deleting item with ID:', id);
    this.removeService.deleteResource(id).subscribe(
      () => {
        console.log('Item with ID', id, 'deleted successfully');
        alert('Resource deleted successfully');
      },
      (error: any) => {
        console.error('Error deleting item with ID', id, ':', error);
        alert('No such Resource found please check ID');
      }
    );
  }

  logout(){
    this.router.navigate(['']);
  }
  viewResources(){
    this.router.navigate(['viewAllResources']);
  }
  addResources(){
    this.router.navigate(['addResource'])
  }
  addjds(){
    this.router.navigate(['addJD']);
  }
  jds(){
    this.router.navigate(['jds'])
  }
  home(){
    this.router.navigate(['rmgHome']);
  }

}
