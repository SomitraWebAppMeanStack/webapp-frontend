import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FaqComponent} from "../faq/faq.component"

import { ContactsComponent } from './contacts.component';

const routes: Routes = [
  { 
    
    path: '',
    component: ContactsComponent
  },
  {
    path: 'faq',
    component: FaqComponent
  },



];







@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
