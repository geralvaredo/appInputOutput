import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Usuario} from '../../clases/usuario';

@Component({
  selector: 'app-listado-entidad',
  templateUrl: './listado-entidad.component.html',
  styleUrls: ['./listado-entidad.component.scss']
})
export class ListadoEntidadComponent implements OnInit {

  @Input() listaUsuarios: Usuario[];
  @Output() usuarioSeleccionado: EventEmitter<any> = new EventEmitter<any>();
  displayedColumns: string[] = ['id', 'email'];
  dataSource = this.listaUsuarios;

  constructor() { }

  ngOnInit(): void {
  }

  mostrarDetalle(usuario: Usuario): void {
    this.usuarioSeleccionado.emit(usuario);
  }

}
