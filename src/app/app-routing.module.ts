import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { AddOneComponent  } from "./components/add-one/add-one.component";
import { ListAllComponent } from "./components/list-all/list-all.component";
import { UsuarioComponent } from './components/usuario/usuario.component';
import { BuscadorUsuComponent } from './components/buscador-usu/buscador-usu.component';

const ROUTES: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'addone', component: AddOneComponent},
  {path: 'listall', component: ListAllComponent},
  {path: 'usu/:id', component: UsuarioComponent},
  {path: 'find/:termino', component: BuscadorUsuComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
]; 

@NgModule({
  imports: [RouterModule.forRoot(ROUTES, { useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
