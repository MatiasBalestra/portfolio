import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/core/services/persona.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss']
})
export class AboutmeComponent implements OnInit {
  posts:any;

  constructor(private service:PersonaService) { }

  ngOnInit(){
    this.service.getPosts().subscribe(response => {
      this.posts= response;
      console.log(this.posts);
    })


    
  }

}
