import { Routes } from '@angular/router';
import { ScriptViewComponent } from './pages/script-view/script-view.component';
import { FeedViewComponent } from './pages/feed-view/feed-view.component';
import { ProfileViewComponent } from './pages/profile-view/profile-view.component';
import { CoursesViewComponent } from './pages/courses-view/courses-view.component';
import { BlogViewComponent } from './pages/blog-view/blog-view.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { AdminViewComponent } from './pages/admin-view/admin-view.component';
import { OffersViewComponent } from './pages/offers-view/offers-view.component';
import { ScriptSubvierwComponent } from './components/script-subvierw/script-subvierw.component';

export const routes: Routes = [
  { path: '', redirectTo: '/scripts', pathMatch: 'full' },
  { path: 'login', component: LogInComponent },
  {
    path: 'scripts',
    title: 'Scripts',
    component: ScriptViewComponent,
  },
  { path: 'scripts/:scriptId', component: ScriptSubvierwComponent },

  { path: 'feed', title: 'Feed', component: FeedViewComponent },
  { path: 'offers', title: 'Offers', component: OffersViewComponent },
  {
    path: 'profile',
    title: 'Profile',
    component: ProfileViewComponent,
    children: [
      {
        path: 'user/:name',
        component: ProfileViewComponent,
      },
    ],
  },
  { path: 'courses', title: 'Courses', component: CoursesViewComponent },
  { path: 'blog', title: 'Blog', component: BlogViewComponent },
  { path: 'admin', component: AdminViewComponent },
  { path: '**', component: PageNotFoundComponent },
];
