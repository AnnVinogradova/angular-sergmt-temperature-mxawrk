import './polyfills';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { MainModule } from './main.module';

platformBrowserDynamic().bootstrapModule(MainModule).then(ref => {
  if (window['ngRef']) {
    window['ngRef'].destroy();
  }
  window['ngRef'] = ref;

}).catch(err => console.error(err));