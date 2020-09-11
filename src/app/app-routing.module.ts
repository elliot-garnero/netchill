import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { SeriesComponent } from './series/series.component';
import { SerieDetailsComponent } from './serie-details/serie-details.component';
import { LoginComponent } from './login/login.component';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
