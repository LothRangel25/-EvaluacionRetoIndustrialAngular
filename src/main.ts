import { platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app/app-module';
import { ApplicationConfig } from '@angular/core';
import { provideServerRendering, withRoutes } from '@angular/ssr';
import { provideHttpClient, withFetch, withInterceptorsFromDi, withJsonpSupport } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { serverRoutes } from './app/app.routes.server';


platformBrowser().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  export const appConfig: ApplicationConfig = {
  providers: [provideServerRendering(withRoutes(serverRoutes)),
    provideHttpClient(withInterceptorsFromDi(),withFetch(),withJsonpSupport()),
    provideHttpClientTesting()]
  }; 