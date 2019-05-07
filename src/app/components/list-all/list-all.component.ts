import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService, User } from '../services/user.service';

@Component({
  selector: 'app-list-all',
  templateUrl: './list-all.component.html',
  styleUrls: ['./list-all.component.css']
})
export class ListAllComponent implements OnInit {

  usuarios:User[] = []
  name:any;
  
  constructor(
      private router:Router,
      private usersService:UsersService
  ) {


  }

  ngOnInit() {
    this.usuarios = this.usersService.getUsers()
    console.log("Los usuarios estan listos")
    console.log(this.usuarios)
    this.name = this.usuarios.length
  }

  orderby(sort:string){
    
    switch (sort) {
      case 'name':
        {
          this.usuarios = this.usuarios.sort(this.sortByFirstName)
          console.log(this.usuarios)
          break;
        }

      case 'lname':
        {
          this.usuarios = this.usuarios.sort(this.sortByFirstLName)
          console.log(this.usuarios)
          break;
        }

      case 'phone':
        {
          this.usuarios = this.usuarios.sort(this.sortByFirstPhone)
          console.log(this.usuarios)
          break;
        }

      case 'mail':
        {
          this.usuarios = this.usuarios.sort(this.sortByFirstMail)
          console.log(this.usuarios)
          break;
        }

      default:
        break;
    }

  //  if (sort === 'name') {
  //    this.usuarios = this.usuarios.sort(this.sortByFirstName)
  //    console.log(this.usuarios)
  //  }
  }

  sortByFirstName(a:User, b:User){
    if(a.firstName > b.firstName) return 1
    else if(a.firstName === b.firstName) return 0
    else return -1
  }

  sortByFirstLName(a:User, b:User){
    if(a.lastName > b.lastName) return 1
    else if(a.lastName === b.lastName) return 0
    else return -1
  }
  sortByFirstPhone(a:User, b:User){
    if(a.Phone > b.Phone) return 1
    else if(a.Phone === b.Phone) return 0
    else return -1
  }
  sortByFirstMail(a:User, b:User){
    if(a.Mail > b.Mail) return 1
    else if(a.Mail === b.Mail) return 0
    else return -1
  }

  verUsuario( id:number ){
    console.log("Entrando al id: ", id)
    this.router.navigate(['/usu',id])
  }

  buscarUsu(termino:string){
    this.router.navigate(['/find',termino])
  }

}
