import { Component } from '@angular/core';
import {MyServiceService} from './my-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'School of Net';

  nome = '';

  constructor(private myService:MyServiceService){
    console.log(myService.variavel);
  }

  //Angular Elements - Web components agnostico/desacoplados ****************** Vue.js, React.js, Ember.js, Backbone.js

  //jquery - jquery upload - bootstrap - outras coisas

  //tag personalizada - vida propria <upload></upload>
}


//Ivy Renderer - Renderização de templates de forma otimizada

//Bazel

//Angular Elements

//Angular Material - chega na aplicação e cria uma área de grid

//TypeScript 2.7