import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  constructor(private http: HttpClient) { }

  getTopPosts() {
    const endpoint = 'https://hacker-news.firebaseio.com/v0/topstories.json';
    return this.http.get(endpoint);
  }

  getPost(postId: string | null) {
    const endpoint = 'https://hacker-news.firebaseio.com/v0/item';
    return this.http.get(`${endpoint}/${postId}.json`);
  }
}
