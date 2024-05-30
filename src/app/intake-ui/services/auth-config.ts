// src/app/auth-config.ts
import { Configuration, LogLevel } from '@azure/msal-browser';

export const msalConfig: Configuration = {
    auth: {
        clientId: 'a08bafed-c04f-403e-bd0e-3029926ee183', // Replace with your client ID
        authority: 'https://login.microsoftonline.com/a1692f85-018a-4714-9fe2-cdc3debd36aa', // Replace with your tenant ID
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
