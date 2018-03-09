import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
    public listItem=[
        {
            content:"11这是文本的内容这是文本的内容这是文本的内容",
            contentId:1
        },
        {
            content:"22这是文本的内容这是文本的内容这是文本的内容",
            contentId:2
        },
        {
            content:"33这是文本的内容这是文本的内容这是文本的内容",
            contentId:3
        }
    ];
    constructor() { }

    ngOnInit() {
        console.log("listItemPage")
    }

}
