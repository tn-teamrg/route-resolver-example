import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  Router,
  RouterStateSnapshot
} from '@angular/router';
import { NewsService } from './news.service';
import { of } from 'rxjs/internal/observable/of';
import { Observable, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
// * NOTE:  {'user': () => inject(UserResolver).resolve()}`.
export class NewsResolver implements Resolve<Observable<string>> {
  constructor(private newsService: NewsService, private router: Router) {}

  // * NOTE: #1
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<string> {
    console.log(`[LOG] -- NewsResolver invoked`);
    return of('Route!').pipe(delay(3000));
  }


}
