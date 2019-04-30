import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PreloadDelayed } from './shared/preload-delayed';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'book',
    loadChildren: './books/books.module#BooksModule',
    data: {
      preload: true,
      delay: 4500
    }
  },
  {
    path: '',
    redirectTo: '/book',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadDelayed,
      enableTracing: false
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
