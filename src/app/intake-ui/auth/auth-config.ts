// src/app/auth-config.ts
import {BrowserCacheLocation, Configuration, InteractionType, LogLevel} from '@azure/msal-browser';
import {environment} from "../../../environments/environment";
import {MsalGuardConfiguration, MsalInterceptorConfiguration} from "@azure/msal-angular";

export const msalConfig: Configuration = {
  auth: {
    clientId: '7e0686bb-c210-4396-b7f0-2b7d008af0ac',
    authority: 'https://login.microsoftonline.com/1a407a2d-7675-4d17-8692-b3ac285306e4',
    redirectUri: environment.redirectUri,
  },
  cache: {
    cacheLocation: BrowserCacheLocation.LocalStorage, // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  },
  system: {
    allowNativeBroker: false, // Disables native brokering support
    loggerOptions: {
      loggerCallback: (logLevel, message, piiEnabled) => {
        console.log(message);
      },
      logLevel: LogLevel.Info,
      piiLoggingEnabled: false,
    }
  },
};

export const msalInterceptorConfig: MsalInterceptorConfiguration = {
  interactionType: InteractionType.Popup,
  protectedResourceMap:
    new Map([
      ['https://graph.microsoft.com/v1.0/me', ['https://graph.microsoft.com/.default']],
      [environment.baseUrl + '/common/demand-intake/*', ['api://itaap-demand-intake/demand_login']],
    ])
};

export const msalGuardConfig: MsalGuardConfiguration = {
  interactionType: InteractionType.Popup,
  authRequest: {
    scopes: ['api://itaap-demand-intake/demand_login']
  }
};

