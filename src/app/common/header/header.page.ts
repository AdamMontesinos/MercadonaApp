import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.page.html',
  styleUrls: ['./header.page.scss'],
})
export class HeaderPage implements OnInit {
  @Input() pageName:string;
  @Input() backUrl:string;

  constructor() { }

  ngOnInit() {
    if(!this.backUrl) this.backUrl ="/home"
  }

}
