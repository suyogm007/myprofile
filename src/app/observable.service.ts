import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {

  numArray = [10,20,30,40,50];
  // numArray = [];

  userArray = [
    {userId: 1, name: "ABC", location: "Kothrud"},
    {userId: 2, name: "PQR", location: "Pimpri"},
    {userId: 3, name: "KLM", location: "Viman Nagar"},
    {userId: 4, name: "XYZ", location: "Andheri"},
  ]

  constructor() { }

  createObservable() {
    return new Observable(observer => {
      if(this.numArray.length > 0) {
        observer.next(this.numArray)
      } else {
        observer.error("data is not available")
      }
      observer.complete();
    })
  }
  seenObservable() {
  return new Observable(observer => {
    if(this.userArray.length > 0) {
      observer.next(this.userArray)
    } else {
      observer.error("userArray is not available")
    }
      observer.complete();
  })
}
}
