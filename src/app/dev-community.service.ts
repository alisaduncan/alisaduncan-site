import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Post } from './types';

interface DevCommunityArticle {
  title: string;
  description: string;
  cover_image: string;
  url: string;
  published_timestamp: string;
}

@Injectable({
  providedIn: 'root'
})
export class DevCommunityService {

  constructor(private http: HttpClient) { }

  public getPosts(): Observable<Post[]> {
    return this.http.get<DevCommunityArticle[]>('https://dev.to/api/articles?username=alisaduncan')
      .pipe(
        map((articles: DevCommunityArticle[]) => articles.map(article => this.toPost(article)))
      );
  }

  private toPost(article: DevCommunityArticle): Post {
    return {
      title: article.title,
      description: article.description,
      url: article.url,
      imageUrl: article.cover_image,
      publishedDate: article.published_timestamp
    };
  }
}
