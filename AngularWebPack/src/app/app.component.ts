import { Component } from '@angular/core';
import '../assets/css/styles.css';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 

    env:string;

    constructor() {
        this.env = process.env.ENV;
   }



}