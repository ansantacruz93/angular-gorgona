import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cx-field',
  templateUrl: './cx-field.component.html',
  styleUrls: ['./cx-field.component.scss']
})
export class CxFieldComponent implements OnInit {

  @Input() label: string;
  @Input() required: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
