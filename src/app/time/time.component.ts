import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {

    private currentTime:string
    constructor() { }

    ngOnInit() {
        console.log(new Date())
        window.setInterval(()=>{
            this.currentTime = moment(new Date()).format("YYYY-MM-DD,HH:mm:ss")
        },1000)
    }

}
