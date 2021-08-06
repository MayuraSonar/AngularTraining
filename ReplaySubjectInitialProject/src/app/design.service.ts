import { Injectable } from '@angular/core';
import { ReplaySubject, AsyncSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignService {
  videoEmit = new ReplaySubject<string>(4, 5000);
  AsyncVideoEmit = new AsyncSubject<string>();
  constructor() { }
}
