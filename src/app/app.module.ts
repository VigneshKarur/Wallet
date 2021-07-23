import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from 'angularx-social-login';
import { HomeComponent } from './home/home.component';
import { AddMoneyComponent } from './home/add-money/add-money.component';

import { RouterModule,Routes } from '@angular/router';
const routes: Routes = [
  { path: 'add-money', component: AddMoneyComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddMoneyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            '658537167633-svv36g8467b06b8jkr39jhvudeg1su3l.apps.googleusercontent.com'
          )
        }
      ]
    } as SocialAuthServiceConfig,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
