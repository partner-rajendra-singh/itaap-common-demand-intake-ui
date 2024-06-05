// src/app/auth-config.ts
import { Configuration, LogLevel } from '@azure/msal-browser';

export const msalConfig: Configuration = {
    auth: {
        clientId: '7e0686bb-c210-4396-b7f0-2b7d008af0ac', // Replace with your client ID
        authority: 'https://login.microsoftonline.com/1a407a2d-7675-4d17-8692-b3ac285306e4', // Replace with your tenant ID
        redirectUri: 'http://localhost:4200', // Replace with your redirect URI
    },
    cache: {
        cacheLocation: 'localStorage', // This configures where your cache will be stored
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
