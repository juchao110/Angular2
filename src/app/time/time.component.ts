import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {

    private currentTime:Date
    constructor() { }

    ngOnInit() {
        console.log(new Date())
        window.setInterval(()=>{
            this.currentTime=new Date()
        },1000)
    }

}
