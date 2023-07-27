import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { NewsService } from './news.service';

@Injectable({
  providedIn: 'root'
})
export class PostResolver implements Resolve<boolean> {
  constructor(private newsService: NewsService) {}

  // * NOTE: #1
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.newsService.getPost(route.paramMap.get('id'));
  }

  // * NOTE: #2
  // resolve(): Observable<any> {
  //   return this.newsService.getTopPosts().pipe(catchError(() => {
  //     return of('data not available at this time');
  //   }));
  // }

  // * NOTE: #3
  // return an EMPTY observable and return the user to the root path

  // resolve(): Observable<any> {
  //   return this.newsService.getTopPosts().pipe(catchError(() => {
  //     this.router.navigate(['/']);
  //     return EMPTY;
  //   }));
  // }
}
