import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

 @Input() childProperty;
 @Output() sendRequestToData = new EventEmitter()

  ngOnInit(): void {
    console.log("Child component: this is the content of my father's color variable ", this.childProperty)
  }

  sendEvent() {
    this.sendRequestToData.emit(2021);
  }

}
