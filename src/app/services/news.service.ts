import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from '../models/news';


//decorate class to make it injectable
@Injectable({
  providedIn: 'root'
})
export class NewsService {
  news:Array<News> = [];

  //assign the apikey generated to access APIs of newsapi.org to api_key property
  //steps to generate apikey are available in README.md file
  api_key:string = "https://newsapi.org/v2/top-headlines?country=in&apikey=0075009f20dd4fd0ba487b2953819eb8&page=1";

  // inject the HttpClient dependency that will be used to make http request
  constructor(private client:HttpClient) { }


  public getTrendingNews(){
    //this function should make a get request to fetch trending news provided by newsapi.org
    return this.client.get(this.api_key);
  }

  public addNews(newsItem:News){
    //this function should make a post request to save news item to db.json in server
  }


}
