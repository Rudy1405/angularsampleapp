import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from '../services/user.service';



@Component({
  selector: 'app-add-one',
  templateUrl: './add-one.component.html',
  styleUrls: ['./add-one.component.css']
})
export class AddOneComponent implements OnInit {
  

  Phone:string = "Phone Number *" ;
  formu:FormGroup;  
  saved:boolean = false;

  constructor( private usersServices:UsersService )
    {
      this.formu = new FormGroup({
        'firstName': new FormControl('',[Validators.required, Validators.minLength(3)]) ,
        'lastName': new FormControl('',[Validators.required,Validators.minLength(3)]) ,
        'Address':  new FormControl('',[Validators.required,Validators.minLength(3)]),
        'Mail': new FormControl('',[Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]) ,
        'Phone': new FormControl('',[Validators.required, Validators.pattern("^[0-9]*$"),Validators.minLength(10)]) ,
      })
      this.Phone=this.formu.value.Phone
 

  }
    
  ngOnInit() {
  }

  save(){
    console.log("guardado")
   console.log(this.formu.value)
   this.usersServices.addUser(this.formu.value)
   this.saved=true
  }

}
