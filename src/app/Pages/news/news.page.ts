import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/models/news';
import { CompanyService } from 'src/app/Services/company.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  liked: boolean=false;
  allNews: News[]; 

  constructor(private companyService: CompanyService) { }

  ngOnInit() {
    this.allNews=this.companyService.getNews();
    }
  onClick(){
    this.liked=!this.liked
  }

}
