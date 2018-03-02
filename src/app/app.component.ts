import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    private headList=[
        {"url":"home","name":"主页","id":'time'},
        {"url":"list","name":"列表","id":2},
    ];
}
