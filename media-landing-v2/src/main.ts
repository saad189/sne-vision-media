import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/modules/app.component';
import { appConfig } from './app/modules/app.config';


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
