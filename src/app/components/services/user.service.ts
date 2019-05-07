import { Injectable } from "@angular/core";

@Injectable()

export class UsersService{

    private usuarios:User[] = [
        {
            firstName: "Ramon",
            lastName:  "Valdez",
            Address: "Enrique Segoviano #1944, La Vecindad",
            Mail: "monchito@mail.com",
            Phone: "3331112222", 
        },
        {
            firstName: "Salvador",
            lastName:  "Del Octavio",
            Address: "Enrique Segoviano #1944, La Vecindad",
            Mail: "chavo8@mail.com",
            Phone: "2229767824", 
        },
        {
            firstName: "Florinda",
            lastName:  "Mesa",
            Address: "Enrique Segoviano #1944, La Vecindad",
            Mail: "dflorinda@mail.com",
            Phone: "2229767824", 
        },
        {
            firstName: "Enrique",
            lastName:  "Mesa",
            Address: "Enrique Segoviano #1944, La Vecindad",
            Mail: "eltesorodemami@mail.com",
            Phone: "3338458976", 
        },
        {
            firstName: "Patricia",
            lastName:  "Ramos",
            Address: "siempre viva #8876",
            Mail: "patyramos@mail.com",
            Phone: "4441231234", 
        },
        {
            firstName: "Juana",
            lastName:  "De Arco",
            Address: "ruan #1431 francia",
            Mail: "arcomortal@mail.com",
            Phone: "5556879876", 
        },
        {
            firstName: "Cleotilde",
            lastName:  "Ramos",
            Address: "Enrique Segoviano #1944, La Vecindad",
            Mail: "w71@mail.com",
            Phone: "6666666666", 
        },
        {
            firstName: "Peter",
            lastName:  "Peterson",
            Address: "evergreen #1568",
            Mail: "petepete@mail.com",
            Phone: "7776873543", 
        },
        {
            firstName: "Jose de Jesus",
            lastName:  "Espinosa",
            Address: "Av. Juarez 2426 La Paz",
            Mail: "cutiestar@mail.com",
            Phone: "8884893576", 
        },
        {
            firstName: "Fransisco",
            lastName:  "Ezpindola",
            Address: "Hidalgo Miguel #8975",
            Mail: "outlookcom.ezpindolayasociados.com",
            Phone: "9999877963", 
        }
      ];
    

    constructor() {
        console.log('Servicio de usuarios listo para usar')
    }

    getUsers(){
        return this.usuarios
      }
    
    getUser(id:string){
        return this.usuarios[id]
      }

      addUser( newUser:User ){
        this.usuarios.push(newUser)
        
      }

    deleteUser( usu:User ){
    this.usuarios.splice( this.usuarios.indexOf(usu),1)

    }
    buscarUsuarios(termino:string){
        let usersArr:User[]=[]
        termino = termino.toLowerCase()
        

        for (let i =0 ; i<this.usuarios.length;i++) {

          let user = this.usuarios[i]
          let nombre = user.firstName.toLowerCase()
          let apellido = user.lastName.toLowerCase()
          let direccion = user.Address.toLowerCase()
          let mail = user.Mail.toLowerCase()
          let numero = user.Phone
          if (nombre.indexOf(termino) >=0 || apellido.indexOf(termino) >=0 || direccion.indexOf(termino) >=0 ||mail.indexOf(termino) >=0 || numero.indexOf(termino) >=0 ) {
             user.idx = i
              usersArr.push(user)
          }

        }
        return usersArr
      }
}


// creamos una interfaz para que no se inserten usuarios que no cuenten
// con las caracteriticas ya definidas alv
export interface User{ 
    firstName: string;
    lastName: string;
    Address: string;
    Mail: string;
    Phone : string;
    idx?: number
}

