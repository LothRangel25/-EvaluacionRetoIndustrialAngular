import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationConfig, Component } from '@angular/core';
import { provideServerRendering, withRoutes } from '@angular/ssr';
import { serverRoutes } from './app.routes.server';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient, withFetch, withInterceptorsFromDi, withJsonpSupport } from '@angular/common/http';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const appConfig: ApplicationConfig = {  
  providers: [provideServerRendering(withRoutes(serverRoutes)),
    provideHttpClient(withInterceptorsFromDi(),withFetch(),withJsonpSupport()),
    provideHttpClientTesting()]
};