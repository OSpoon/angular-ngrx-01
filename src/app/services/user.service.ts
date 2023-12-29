import { Injectable } from '@angular/core';
import { Observable, map, timer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  updateApi(): Observable<{
    name: string;
    age: number;
    gender: string;
  }> {
    return timer(3000).pipe(
      map(() => ({
        name: 'xiao li',
        age: 23,
        gender: 'male',
      }))
    );
  }
}
