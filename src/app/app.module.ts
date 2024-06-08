import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DemandIntakeService} from './intake-ui/services/demand-intake.service';
import {ConfirmationService, MessageService} from 'primeng/api';
import {AuthService} from './intake-ui/services/auth.service';
import {AuthGuard} from './intake-ui/services/auth-guard.service';
import {MainAppLayoutModule} from './layout/main.app.layout.module';
import {IntakeUIComponentsModule} from './intake-ui/intake-ui.module';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {
  MsalInterceptor,
  MSAL_INSTANCE,
  MSAL_GUARD_CONFIG,
  MSAL_INTERCEPTOR_CONFIG,
  MsalService,
  MsalGuard,
  MsalBroadcastService,
  MsalGuardConfiguration,
  MsalInterceptorConfiguration, MsalModule
} from '@azure/msal-angular';
import {PublicClientApplication, InteractionType} from '@azure/msal-browser';
import {msalConfig} from './intake-ui/auth/auth-config';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {environment} from "../environments/environment";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    MainAppLayoutModule,
    BrowserModule,
    AppRoutingModule,
    IntakeUIComponentsModule,
    MsalModule.forRoot(MSALInstanceFactory(), MSALGuardConfigFactory(), MSALInterceptorConfigFactory())
  ],
  providers: [DemandIntakeService, MessageService, AuthGuard, AuthService, ConfirmationService,
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true
    },
    {
      provide: MSAL_INSTANCE,
      useFactory: MSALInstanceFactory
    },
    {
      provide: MSAL_GUARD_CONFIG,
      useFactory: MSALGuardConfigFactory
    },
    {
      provide: MSAL_INTERCEPTOR_CONFIG,
      useFactory: MSALInterceptorConfigFactory
    },
    MsalService,
    MsalGuard,
    MsalBroadcastService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

function MSALInstanceFactory() {
  return new PublicClientApplication(msalConfig);
}

function MSALGuardConfigFactory(): MsalGuardConfiguration {
  return {
    interactionType: InteractionType.Popup,
    authRequest: {
      scopes: ['user.read', 'https://graph.microsoft.com/.default'] // Add scopes here
    }
  };
}

function MSALInterceptorConfigFactory(): MsalInterceptorConfiguration {
  return {
    interactionType: InteractionType.Popup,
    protectedResourceMap: new Map([
      ['https://graph.microsoft.com/v1.0/me', ['user.read']],
      [environment.baseUrl + '/common/demand-intake/*', ['https://graph.microsoft.com/.default']] // Adjust the scope accordingly
    ])
  };
}
