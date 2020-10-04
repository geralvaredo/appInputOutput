import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ControlEntidadComponent} from './pagina/control-entidad/control-entidad.component';
import {BienvenidoComponent} from './componentes/bienvenido/bienvenido.component';
import {LoginComponent} from './componentes/login/login.component';
import {RegistroComponent} from './componentes/registro/registro.component';
import {ErrorComponent} from './componentes/error/error.component';

const routes: Routes = [
  {path: '' , component : LoginComponent},
  {path: 'error', component : ErrorComponent},
  {path: 'registro' , component: RegistroComponent},
  {path: 'entidadListado' , component: ControlEntidadComponent},
  {path: 'bienvenido', component: BienvenidoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
