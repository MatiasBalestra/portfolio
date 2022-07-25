import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/core/services/persona.service';
import { datainterface, Education, Experience, Skill, Project } from 'src/app/core/interfaces/datainterface';
 

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss']
})
export class AboutmeComponent implements OnInit {
  public data:any = [];

  constructor(private PersonaService:PersonaService) { }

  ngOnInit(): void{

    this.cargarData();
    
    
  }

  public cargarData(){
    this.PersonaService.get(`https://balestra-matias.herokuapp.com/persona/details`)
    .subscribe(respuesta => {
      this.data = respuesta;
      console.log(this.data);
      
    })
  }



}
