import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserGuard } from './shared/guards/user/user.guard';

import { LandingComponent } from './landing/components/landing/landing.component';
import { BookshelfComponent } from './bookshelf/components/bookshelf/bookshelf.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'bookshelf', component: BookshelfComponent, canActivate: [UserGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
