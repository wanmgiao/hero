import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(public messageService: MessageService) {}

  ngOnInit() {
  }

}

// import { Component, OnInit } from '@angular/core';
// import { MessageService } from '../message.service';
 
// @Component({
//   selector: 'app-messages',
//   templateUrl: './messages.component.html',
//   styleUrls: ['./messages.component.css']
// })
// export class MessagesComponent implements OnInit {
//   messageContentList: string[] = [];
//   messageContent: string;
//   constructor(public messageService: MessageService) {}
 
//   ngOnInit() {
//     this.messageContentList = this.messageService.messages;
//   }
//   messageGet(){
//     return this.messageService.messages;
//   }
//   messageAdd() {
//     this.messageContentList.push(this.messageContent);
//   }
//   messageClear(){
//     this.messageService.clear();
//   }
//   messageSubmit(){
//     this.messageService.add(this.messageContent);
//   }
// }
