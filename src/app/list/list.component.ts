import { Component, ElementRef, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from "@angular/router";
import { Http ,RequestOptions,Headers} from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { ListService } from './service/list.service';

@Component({
  selector: 'list-row',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  	private listName:string='列表数据';
    private isShow:boolean;
    private message:string="儿子，儿子，我是你爸爸";
    private messageTwo:string;
    public newList;
    private listData=[
        {'content':'第一条数据','id':1},
        {'content':'第二条数据','id':2},
        {'content':'第三条数据','id':3},
        {'content':'第四条数据','id':4}
    ];
    private headers = new Headers({'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImEwZmRlYTNjZWQ3MmNkY2ExYTY2MTAwMzQ2NWEwZTM2ZWNhYzIyYzRhOTA5ZTRjOWNkZDRjYTgyOWQ0ZDBkNWNlZTNhM2RmN2RlYTU0YWQwIn0.eyJhdWQiOiIyIiwianRpIjoiYTBmZGVhM2NlZDcyY2RjYTFhNjYxMDAzNDY1YTBlMzZlY2FjMjJjNGE5MDllNGM5Y2RkNGNhODI5ZDRkMGQ1Y2VlM2EzZGY3ZGVhNTRhZDAiLCJpYXQiOjE1MjA0MDkwMTgsIm5iZiI6MTUyMDQwOTAxOCwiZXhwIjoxNTIxMDEzODE4LCJzdWIiOiI0MjEiLCJzY29wZXMiOltdfQ.JO4HZpwYTyxHfIiTSRZOpYqofcYRvByIKXdKd9kGqP_48pc_rJYxTxF8cLzWVuPMvAEg-w6Cz-TARkjLMpyeeT0cQZZd_9Uw83NB1T4-ztKTScpgaiWgS97bG6Dhc-GN9NHBDGOlm9tyIXrF-JhiGZib6zhYDRXpQAcurmTvplFeaxW1xVrNbjlRGymeLcGacBluL6GE-vMi-iIv8ntZklx4LBGliYLYaFcBKywpfA4P9J7A47EjyZREpH2B2leQ2xdKuXHQOIU2XO66KJYswerEnRJJV1CAKgCEG4EyBd6Eh-CwX1LVFRx7gir_WvLJugxwnrtx4JHc1Url0o57a3j5G2ZIbWe-US0Cyr5vrOdnG_FE5uyIb49BD2f8ktErZnUlcgQMdle9N2RSeJy78Yr5TEfnF4P6DEKAFCyYReMdadIVQf0tuuEWQ_TKvakCSAZ48uSwFR-8mR0e_O5vh1b5iTJUJcnZQVntDA64xwKV3MlaCbWYvaNb9jCUNPv56_xH-g6DbcxLWRmqup95q_OyETkqA5NebPkImlQvo00xaZ5Psg0639BzBuZWbO8Ksj3ECq2MHff_6zuDRKZENFSyJBUz13sELTG5YjT-WaBgJIAjXrGUrwOuYwm4r9isdOICtU8xFG3QbcsQ2Ks4XdFyWnJt2Wlbr5MW-WdyiQE'})


    constructor(
        public activateRoute: ActivatedRoute,
        public router:Router,
        public listService:ListService,
        public http:Http,
    ) {
        
    };
  	ngOnInit() {
        console.log("list");
        console.log(this,"this");
        console.log(this.activateRoute.params['value']['id'],'url中的参数');
        this.getData()
    };
    getMessage(msg:string) {
        this.messageTwo=msg;
    };
    goDetail(id){
        // this.router.navigateByUrl(['detail',id])
        this.router.navigate(['sale/list/detail',id])
        console.log(this)
    };
    public getData(){
        // let options = new RequestOptions({ headers: this.headers});
        // this.http.get("http://sapi.seekleather.cn/api/v1/dz/list",options).subscribe(res=>{
        //     this.newList=res.json()
        //     console.log(this.newList.data)
        // })
        console.log(this.listService.getList(),'get')
        return this.listService.getList().subscribe(res=>{
            console.log(res,'myres')
            this.newList=res
        })
    }
}
