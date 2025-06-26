import { Component } from '@angular/core';
import { privateData } from '../../environments/private';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  email = privateData.email;
  whatsapp = privateData.whatsapp;
  phone = privateData.phone;

}
