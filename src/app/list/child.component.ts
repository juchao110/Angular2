import { Component, ElementRef, Renderer, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'list-child',
  templateUrl: './child.component.html'
})
export class ChildComponent implements OnInit {
    @Input() private parentMessage:string;
    @Output() private childMessage = new EventEmitter<string>();
  	ngOnInit() {
        console.log("child")
    }
    sendMessage() {
        this.childMessage.emit("爸爸，爸爸，我是你儿子")
    }
}
