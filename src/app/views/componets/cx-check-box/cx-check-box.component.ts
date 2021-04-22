import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
  
@Component({
  selector: 'app-cx-check-box',
  templateUrl: './cx-check-box.component.html',
  styleUrls: ['./cx-check-box.component.scss']
})
export class CxCheckBoxComponent implements OnInit {

  @Input()
  label: string;
  value: boolean;
  @Output() valueEvent = new EventEmitter<boolean>();


  constructor() {
    this.valueEvent.emit(this.value);
  }

  ngOnInit(): void {
    this.value = false;
  }

  sendMessage() {
    this.value = !this.value;

    this.valueEvent.emit(this.value);
  }


}
