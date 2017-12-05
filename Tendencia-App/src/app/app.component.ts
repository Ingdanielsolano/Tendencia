import { Component } from '@angular/core';
import { FaceApiService } from './face-api.service';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  algo="asdasd";  

  constructor(private service:FaceApiService) {

    //service.GetDataFb("1025000047511369_1702132073131493");
  }

  take(f:NgForm){
    this.service.GetDataFb(f.value);
  }

  onSubmit(f: NgForm) {    
    this.take(f);
    //console.log(f.value);  // { first: '', last: '' }    
  }

}
