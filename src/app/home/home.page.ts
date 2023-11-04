import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  title: String = 'Mi nueva pagina!';

  hazmeClick(): void{
  alert("Hiciste Click");
  }
  imgUrl: string = ""
  
  NombreAlumno:  string = ""
}
