// src/app/auth-config.ts
import { Configuration, LogLevel } from '@azure/msal-browser';

export const msalConfig: Configuration = {
    auth: {
        clientId: '32020122-420b-4df8-8e1b-137cecd6b9ea', // Replace with your client ID
        authority: 'https://login.microsoftonline.com/7ec1016c-6ee6-451a-a9dd-82f22f546874', // Replace with your tenant ID
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
