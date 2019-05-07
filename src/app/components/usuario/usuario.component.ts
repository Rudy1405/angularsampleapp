import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService, User } from '../services/user.service';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuario:User
   constructor(
    private activatedRoute: ActivatedRoute,
    private  usersService: UsersService,
    private router:Router
    ) { 
      this.activatedRoute.params.subscribe( params => {
       ///podemos quedarnos con nuestro obj id como params.id
       // Es mejor para Angular con params['id'] asi no bota undefined

        //console.log(params)
        this.usuario = this.usersService.getUser(params['id'])
        console.log("Tengo al usuario")  
        console.log(this.usuario)
      } )  
    }

  ngOnInit() {
  }

  regresa(){
    this.router.navigate(['/listall'])

  }

  eliminaUsuario(){

    this.usersService.deleteUser(this.usuario)
    this.router.navigate(['/listall'])
  }


}
