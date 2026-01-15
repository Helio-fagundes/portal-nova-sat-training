import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors, withFetch } from '@angular/common/http';
import { httpLoggerInterceptor } from './providers/http-logger-interceptor/http-logger.interceptor';
import { authInterceptor } from './providers/auth-interceptor/auth-interceptor.module';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(
      withFetch(),
      withInterceptors([httpLoggerInterceptor, authInterceptor])
    )
  ]
};
