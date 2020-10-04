import { Component, OnInit } from '@angular/core';
import {Usuario} from '../../clases/usuario';
import {AuthService} from '../../servicios/auth.service';
import {PersonasService} from '../../servicios/personas.service';

@Component({
  selector: 'app-control-entidad',
  templateUrl: './control-entidad.component.html',
  styleUrls: ['./control-entidad.component.scss']
})
export class ControlEntidadComponent implements OnInit {

  title = 'home';
  listaUsuarios: Usuario[];
  usuarioSeleccionado: Usuario;

  constructor(private auth: AuthService, private persona: PersonasService) {
  }


  ngOnInit(): void {
    this.listadoPersonas();
  }

  salir(): Promise<void> {
    return this.auth.logOut();
  }


  listadoPersonas(): void {
    this.persona.obtenerPersonas().subscribe((persona: any) => {
      this.listaUsuarios = persona;
    }, error => {
      console.log('Error' + error);
    });
  }

  personaSeleccionada(usuario): void{
    this.usuarioSeleccionado = usuario;
  }

}
