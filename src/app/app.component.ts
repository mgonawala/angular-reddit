import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  articles : Article[];

  constructor(){
    this.articles = [
      new Article('Angular IO','http://angular.io'),
      new Article('Full Stack Developer','http://angular.io'),
      new Article('React 101','http://angular.io'),
    ]
  }

  addArticle( title: HTMLInputElement, link: HTMLInputElement): boolean{

      const article = new Article(title.value, link.value);
      this.articles.push(article);
      title.value = '';
      link.value = '';
      return false
  }

  sortedArticles(): Article[]{
    return this.articles.sort( (a: Article, b:Article) => b.getVotes() - a.getVotes())
  }

}  
