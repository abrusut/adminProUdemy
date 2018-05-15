import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

// Interceptor HTTP
import { TokenInterceptor } from './auth/token.interceptor';

// Rutas
import { APP_ROUTING } from './app.routes';

// Modulos
import { PageModule } from './pages/pages.modulo';
import { ServiceModule } from './services/service.module';

// Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    APP_ROUTING,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    PageModule,
    ServiceModule
  ],
  providers: [
    /**{
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }**/
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
