import { Component } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
    public headList=[
        {"url":"home","name":"买家"},
        {"url":"sale","name":"卖家"},
    ];
    public currentIndex:number;
    constructor(
        public router: Router,
        public activeRoute: ActivatedRoute,
    ){}
    ngOnInit(){
        this.currentIndex=0
    }
    changeRoute(url,index){
        console.log(url,"url");
        this.currentIndex = index;
        console.log(this.router.navigateByUrl)
        this.router.navigateByUrl(url)
    }
}
