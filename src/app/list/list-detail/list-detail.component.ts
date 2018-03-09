import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.css']
})
export class ListDetailComponent implements OnInit {
    public listId:string;
  constructor(
      public router:Router,
      public activatedRoute:ActivatedRoute,
  ) { }

  ngOnInit() {
      console.log(this.activatedRoute.params['value']['id'])
      this.listId=this.activatedRoute.params['value']['id']
  }

}
