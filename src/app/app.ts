import { provideHttpClient, withFetch, withInterceptorsFromDi, withJsonpSupport } from '@angular/common/http';
import { ApplicationConfig, Component } from '@angular/core';
import { provideServerRendering, withRoutes } from '@angular/ssr';
import { serverRoutes } from './app.routes.server';
import { provideHttpClientTesting } from '@angular/common/http/testing';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected title = 'angular-reto';
}
export const appConfig: ApplicationConfig = {  
  providers: [provideServerRendering(withRoutes(serverRoutes)),
    provideHttpClient(withInterceptorsFromDi(),withFetch(),withJsonpSupport()),
    provideHttpClientTesting()]
};
