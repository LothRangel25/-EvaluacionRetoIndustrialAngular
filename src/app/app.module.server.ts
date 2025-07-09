import { NgModule } from '@angular/core';
import { provideServerRendering, withRoutes } from '@angular/ssr';
import { App } from './app';
import { AppModule } from './app-module';
import { serverRoutes } from './app.routes.server';
import { UserList } from './user-list/user-list';
import { provideHttpClient, withFetch, withInterceptorsFromDi, withJsonpSupport } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

@NgModule({
  imports: [AppModule
  ],
  providers: [provideServerRendering(withRoutes(serverRoutes)),
    provideHttpClient(withInterceptorsFromDi(),withFetch(),withJsonpSupport()),
    provideHttpClientTesting()
  ],
  bootstrap: [App],
})
export class AppServerModule {}
