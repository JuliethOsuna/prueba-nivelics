import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomeButtonComponent } from './custome-button/custome-button/custome-button.component';
import { BlueBottonComponent } from './blue-botton/blue-botton/blue-botton.component';
import { RedBottonComponent } from './red-botton/red-botton/red-botton.component';
import { UserButtonComponent } from './user-button/user-button/user-button.component';
import { UserFormComponent } from './user-form/user-form/user-form.component';
import { ShowUserComponent } from './show-user/show-user/show-user.component';
import { UserServerComponent } from './user-server/user-server/user-server.component';
import { httpInterceptorProviders } from './interceptors';

@NgModule({
  declarations: [
    AppComponent,
    CustomeButtonComponent,
    BlueBottonComponent,
    RedBottonComponent,
    UserButtonComponent,
    UserFormComponent,
    ShowUserComponent,
    UserServerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
