import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, Params } from '@angular/router';


@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.sass']
})
export class LeftMenuComponent implements OnInit {
    public menuList=[
        {
            "name":"菜单一",
            "url":"items"
        },
        {
            "name":"菜单二",
            "url":"info"
        },
        {
            "name":"菜单三",
            "url":""
        },
        {
            "name":"菜单四",
            "url":""
        }
    ];
    public currentList:number;
    constructor(
        public router:Router,
    ) { }

    ngOnInit() {
        this.currentList=0
    }
    goLink(url,index){
        this.currentList=index;
        console.log(url,index);
        this.router.navigateByUrl(`home/${url}`);
    }

}
