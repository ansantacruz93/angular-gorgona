import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-invalid-from-message',
  templateUrl: './invalid-from-message.component.html',
  styleUrls: ['./invalid-from-message.component.scss']
})
export class InvalidFromMessageComponent implements OnInit {

  @Input() message: string = 'Por favor completar los datos obligatorios indicados';
  @Input() icon: string = 'pi-times-circle';


  constructor() { }

  ngOnInit(): void {
  }

}
