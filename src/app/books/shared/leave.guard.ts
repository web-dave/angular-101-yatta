import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { BookNewComponent } from '../book-new/book-new.component';

@Injectable({
  providedIn: 'root'
})
export class LeaveGuard implements CanDeactivate<BookNewComponent> {
  canDeactivate(
    component: BookNewComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): boolean {
    // console.log(component);
    if (!component.isSaved()) {
      return confirm('R U SURE?');
    }
    return true;
  }
}
