
import { Component, Input, OnInit, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() listadoCard;
  @Output() messageBorrarEvent = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  sendMessageBorrar(empleado: any) {
    this.messageBorrarEvent.emit(empleado.id);
  }

  editar(): void {
    alert('Función en construcción 🔧🔧🔧  ')
  }
}
