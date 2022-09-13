import { Component, OnInit } from '@angular/core';
import { News } from '../models/news';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  newsList:Array<News> = [];
  errorMessage:string="Unable to access news server to fetch news"
  constructor(private ns:NewsService) { }

  ngOnInit() {
    this.ns.getTrendingNews().subscribe(
      data=>{this.newsList = data['articles'];},
      error=>{console.log(this.errorMessage)}
    );
  }

  readLaterHandler(){

  }

}
