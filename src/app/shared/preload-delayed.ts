import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

export class PreloadDelayed implements PreloadingStrategy {
  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    if (route.data) {
      if (route.data.preload) {
        return of(true).pipe(
          delay(route.data.delay),
          map(() => fn())
        );
      }
      return of(false);
    }
    return fn();
  }
}
