import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { SeriesComponent } from './series/series.component';
import { SerieDetailsComponent } from './serie-details/serie-details.component';
import { LoginComponent } from './login/login.component';
<<<<<<< HEAD
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  { path: 'series', component: SeriesComponent },
  { path: 'serie', component: SerieDetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: '', redirectTo: '/series', pathMatch: 'full' },
=======
import { UserInformationsComponent } from './user-informations/user-informations.component';
import { MembersComponent } from './members/members.component';
import { UserFriendsComponent } from './user-friends/user-friends.component';

const routes: Routes = [
  { 
    path: 'series', component: SeriesComponent 
  },

  { 
    path: 'serie', component: SerieDetailsComponent 
  },

  {
     path: 'login', component: LoginComponent 
  },

  { 
    path: 'members', component: MembersComponent 
  },

  {
    path: 'friend', component: UserFriendsComponent 
 },

  { 
    path: 'informations', component: UserInformationsComponent 
  },

  { 
    path: '', redirectTo: '/series', pathMatch: 'full' 
  },
>>>>>>> aef8321c69a9e3471adae871390eeff2cf8431d4
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
