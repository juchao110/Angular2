import { Component, ElementRef, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router"

@Component({
  selector: 'list-row',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  	private listName:string='通讯录';
    private isShow:boolean;
    private message:string="儿子，儿子，我是你爸爸";
    private messageTwo:string;


    constructor(public route: ActivatedRoute) {}

  	ngOnInit() {
        console.log("list")
        console.log(this,"this")
        console.log(this.route.params['value']['id'],'url中的参数')
    }
    getMessage(msg:string) {
        this.messageTwo=msg
        
    }
      
}
