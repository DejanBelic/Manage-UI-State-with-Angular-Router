import {RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: 'contacts', loadChildren: () => import('./contacts/contacts.module').then(m => m.ContactsModule)},
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
