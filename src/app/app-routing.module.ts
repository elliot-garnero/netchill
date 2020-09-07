import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { SeriesComponent } from './series/series.component';

const routes: Routes = [
  { path: 'series', component: SeriesComponent },
  { path: '', redirectTo: '/series', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
