import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';  // Import the necessary operators

@Injectable({
    providedIn: 'root'
})
export class removeService {

  private apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  deleteResource(id: number) {
    const url = `${this.apiUrl}/${id}`;

    return this.http.delete(url).pipe(
      catchError(error => {
        console.error(`Error deleting item with ID ${id}:`, error);
        throw error; // Rethrow the error to propagate it to the subscriber
      })
    );
  }
}
