import { Component, OnInit } from '@angular/core';
import { TablaUsuariosService } from './tabla-usuarios.service';


export interface Users {
  id: number,
  name: string,
  email: string,
  fecha_nacimiento: Date,
  age: number,
  domicilio: string,
  numero_exterior: number,
  colonia: string,
  cp: number,
  ciudad: string
}
const USERS_DATA: Users[] = [];


@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css']
})
export class TablaUsuariosComponent implements OnInit {

  displayedColumns: string[] = ['id','username', 'birthdate', 'age', 'address'];
  dataSource = USERS_DATA;

  constructor(private webservice: TablaUsuariosService) { }

  ngOnInit(): void {
    this.webservice.getUsers().subscribe(data => {
      console.log(data)
      this.dataSource = data['response'];
     });
  }
}
