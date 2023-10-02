import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { NewsPage } from './newsPage';
import { NEWS } from './mock-news';

@Injectable({ providedIn: 'root' })
export class NewsService {

  constructor() { }

  getNews(): Observable<NewsPage[]> {
    const news = of(NEWS);
    return news;
  }

  getNewsPage(id: string): Observable<NewsPage> {
    // For now, assume that a hero with the specified `id` always exists.
    const newsPage = NEWS.find(newsPage => newsPage.id === id)!;
    return of(newsPage);
  }
}