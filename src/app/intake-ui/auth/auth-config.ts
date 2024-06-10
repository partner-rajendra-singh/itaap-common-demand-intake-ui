// src/app/auth-config.ts
import {BrowserCacheLocation, Configuration, InteractionType, LogLevel} from '@azure/msal-browser';
import {environment} from "../../../environments/environment";
import {MsalGuardConfiguration, MsalInterceptorConfiguration} from "@azure/msal-angular";

export const msalConfig: Configuration = {
  auth: {
    clientId: environment.clientId,
    authority: environment.authority,
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
      ['https://graph.microsoft.com/v1.0/me', [environment.scope_default]],
      [environment.baseUrl + '/common/demand-intake/*', [environment.scope_demand_login]],
    ])
};

export const msalGuardConfig: MsalGuardConfiguration = {
  interactionType: InteractionType.Popup,
  authRequest: {
    scopes: [environment.scope_demand_login]
  }
};

