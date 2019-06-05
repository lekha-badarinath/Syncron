import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  movies = [];
  constructor() {}

  listOfMovies() {
    this.movies = [
      'Shawshank Redemption',
      'Break Point',
      'The Matrix',
      'Tangled'
    ];
    return this.movies;
  }
}
