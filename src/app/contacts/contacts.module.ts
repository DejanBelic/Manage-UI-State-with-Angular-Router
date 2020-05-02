import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts.component';
import {ContactsRouting} from './contacts-routing.module';


@NgModule({
  imports: [CommonModule, ContactsRouting],
  declarations: [ContactsComponent],
})


export class ContactsModule {
}

