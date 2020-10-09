import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeriesComponent } from './series/series.component';
import { SerieDetailsComponent } from './serie-details/serie-details.component';
import { LoginComponent } from './login/login.component';
<<<<<<< HEAD
import { LogoutComponent } from './logout/logout.component';
=======
import { UserInformationsComponent } from './user-informations/user-informations.component';
import { MembersComponent } from './members/members.component';
import { UserFriendsComponent } from './user-friends/user-friends.component';
>>>>>>> aef8321c69a9e3471adae871390eeff2cf8431d4

@NgModule({
  declarations: [
    AppComponent,
    SeriesComponent,
    MembersComponent,
    LoginComponent,
<<<<<<< HEAD
    SerieDetailsComponent,
    LogoutComponent
=======
    UserFriendsComponent,
    UserInformationsComponent,
    SerieDetailsComponent
>>>>>>> aef8321c69a9e3471adae871390eeff2cf8431d4
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
