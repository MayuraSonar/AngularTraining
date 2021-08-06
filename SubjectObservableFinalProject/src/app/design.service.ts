import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignService {
  exclusive = new Subject<boolean>();
  empName = new Subject<string>();
  constructor() { }
}
