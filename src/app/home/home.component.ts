import { Component, ElementRef, Renderer, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'home-row',
  templateUrl: './home.component.html',
  styleUrls:['./home.component.sass']
})
export class HomeComponent implements OnInit {
  	ngOnInit() {
        console.log("home")
    }
    
}
