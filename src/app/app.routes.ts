import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home'
  },
  /* { 
    path: 'demo',
    component: DemoComponent,
    title: 'Demo' 
  }, */
  { 
    path: '**', 
    component: HomeComponent,
    title: 'Home' 
  }
];
