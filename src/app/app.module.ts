import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeriesComponent } from './series/series.component';
import { SerieDetailsComponent } from './serie-details/serie-details.component';
import { LoginComponent } from './login/login.component';
import { UserInformationsComponent } from './user-informations/user-informations.component';
import { MembersComponent } from './members/members.component';
import { UserFriendsComponent } from './user-friends/user-friends.component';

@NgModule({
  declarations: [
    AppComponent,
    SeriesComponent,
    MembersComponent,
    LoginComponent,
    UserFriendsComponent,
    UserInformationsComponent,
    SerieDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
