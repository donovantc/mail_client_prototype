import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
/*import { AppModule } from './app/';*/
import { MessagesModule } from './app/messages/messages.module';

if (environment.production) {
  enableProdMode();
}

/*platformBrowserDynamic().bootstrapModule(AppModule);*/
platformBrowserDynamic().bootstrapModule(MessagesModule);
