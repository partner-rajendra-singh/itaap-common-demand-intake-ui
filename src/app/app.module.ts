import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemandIntakeService } from './intake-ui/services/demand-intake.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AuthService } from './intake-ui/services/auth.service';
import { AuthGuard } from './intake-ui/services/auth-guard.service';
import { MainAppLayoutModule } from './layout/main.app.layout.module';
import { IntakeUIComponentsModule } from './intake-ui/intake-ui.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    MainAppLayoutModule,
    BrowserModule,
    AppRoutingModule,
    IntakeUIComponentsModule
  ],
  providers: [DemandIntakeService, MessageService, AuthGuard, AuthService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
