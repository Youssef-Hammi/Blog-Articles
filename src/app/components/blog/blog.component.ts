import { Component } from '@angular/core';
import { Article } from '../../Models/article.model';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-blog',
  standalone: true, 
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  imports: [FormsModule, CommonModule] 
})
export class BlogComponent {
  articles: Article[] = [];         
  searchQuery: string = '';         
  showAddForm: boolean = false;     

  //add
  addArticle(title: string, photoUrl: string, description: string) {
    const newArticle = new Article(title, photoUrl, new Date(), description);
    this.articles.push(newArticle);   
    this.sortArticles();             
    this.showAddForm = false;         
  }

  //upvote
  upvote(article: Article) {
    article.score += 1;
    this.sortArticles();
  }

  //downvote 
  downvote(article: Article) {
    if (article.score > 0) {
      article.score -= 1;
      this.sortArticles();
    }
  }

  // Sort
  sortArticles() {
    this.articles.sort((a, b) => b.score - a.score);
  }

  // Filterss by title 
  get filteredArticles() {
    return this.articles.filter(article =>
      article.title.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}
