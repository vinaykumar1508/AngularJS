import { LoggingService } from './logging.service';
import { AccountsService } from './accountsService';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    NewAccountComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AccountsService, LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
