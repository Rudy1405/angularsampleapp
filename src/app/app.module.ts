import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AddOneComponent } from './components/add-one/add-one.component';
import { ListAllComponent } from './components/list-all/list-all.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { UsersService } from './components/services/user.service';
import { BuscadorUsuComponent } from './components/buscador-usu/buscador-usu.component';
import { TophonePipe } from './pipes/tophone.pipe';
import { PhonePipe } from './pipes/phone.pipe';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderByPipe } from './pipes/order-by.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AddOneComponent,
    ListAllComponent,
    UsuarioComponent,
    BuscadorUsuComponent,
    TophonePipe,
    PhonePipe,
    OrderByPipe,
    LoadingComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [  //remember put here the servicces always
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
