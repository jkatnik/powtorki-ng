import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-echo',
  templateUrl: './echo.component.html',
  styleUrls: ['./echo.component.css']
})
export class EchoComponent implements OnInit {
  @Input() myValue: string;
  @Output() myValueUpdated = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  emit() {
    this.myValueUpdated.emit(this.myValue);
  }
}
