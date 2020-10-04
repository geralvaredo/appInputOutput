import {Component, Input, OnInit} from '@angular/core';
import {Usuario} from '../../clases/usuario';

@Component({
  selector: 'app-detalle-entidad',
  templateUrl: './detalle-entidad.component.html',
  styleUrls: ['./detalle-entidad.component.scss']
})
export class DetalleEntidadComponent implements OnInit {

  @Input() usuarioMostrado: Usuario ;

  constructor() { }

  ngOnInit(): void {
  }

}
