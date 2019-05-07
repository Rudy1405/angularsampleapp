import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscador-usu',
  templateUrl: './buscador-usu.component.html',
  styleUrls: ['./buscador-usu.component.css']
})
export class BuscadorUsuComponent implements OnInit {

  usuarios:any[]=[]
  termino:string
  index:number 
  loading: boolean

  constructor(private activatedRoute:ActivatedRoute , private usersService:UsersService, private router:Router) { 
    this.loading = true

  }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params=>{
      this.termino = params['termino']
      console.log("Recibi en find: ",params)
      this.usuarios = this.usersService.buscarUsuarios(params['termino'])
      console.log("Ya tengo Users")
      console.log(this.usuarios)
      setTimeout(() => {
        this.loading = false
      }, 1500);
      
    })
  }
  verUsuario(i:number){

    console.log("Entrando al id de: ", this.usuarios[i] )
    this.router.navigate(['/usu',this.usuarios[i].idx])
  }
}
