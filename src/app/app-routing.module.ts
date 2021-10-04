import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ServicesComponent } from './services/services.component';
import { OurteamComponent } from './ourteam/ourteam.component';
import { AboutComponent } from './about/about.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component'
import {FaqComponent} from './faq/faq.component'

import {TermConditionComponent} from './term-condition/term-condition.component'
import { BlogComponent } from './blog/blog.component';



const routes: Routes = [
  {
    path: 'ourteam',
    component:OurteamComponent,
  },
  {
    path: 'services',
    component: ServicesComponent, 
    // loadChildren: () =>
    //   import('./services/services.module').then((m) => m.ServicesModule),
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    // loadChildren: () =>
    //   import('./projects/projects.module').then((m) => m.ProjectsModule),
 },
  {
    path: 'contacts',
    component: ContactsComponent,

 },
  {
    path: '',
    component: HomeComponent,
    // loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'about',
    component: AboutComponent,
    // loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent,
  },
  {
    path: 'faq',
    component: FaqComponent,
  },

  {
    path: 'term-condition',
    component: TermConditionComponent,
  },
  {
    path: 'blog',
    component: BlogComponent,
  },
  

  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
