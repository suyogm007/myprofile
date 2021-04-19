import { Component, OnInit } from '@angular/core';
import { ObservableService } from '../observable.service';
import { error } from 'util';

@Component({
  selector: 'app-observableex',
  templateUrl: './observableex.component.html',
  styleUrls: ['./observableex.component.css']
})
export class ObservableexComponent implements OnInit {
  numbers;
  table;
  constructor(private service: ObservableService) { }

  ngOnInit() {
    this.service.createObservable().subscribe(data => {
      this.numbers = data;
    }, error => {
      alert(error)
    },() => {
      console.log("completed")
    })
     this.service.seenObservable().subscribe(data1 => {
       this.table = data1;
     }, error => {
       alert(error)
     },() => {
       console.log("completed")
     }) 
    }
  }