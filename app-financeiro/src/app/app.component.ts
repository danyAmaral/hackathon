import { Component } from '@angular/core';
import * as ptMessages from 'devextreme/localization/messages/pt.json';
import { loadMessages, locale } from 'devextreme/localization';
import config from 'devextreme/core/config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    loadMessages(ptMessages);
    locale(navigator.language);
    config({ defaultCurrency: 'BRL' });
  }
  title = 'app-financeiro';
}
