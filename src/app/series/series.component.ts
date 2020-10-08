import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css'],
})
export class SeriesComponent implements OnInit {
  series;
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getSeries();
  }

  getSeries() {
    let token = localStorage.getItem('connect');
    this.httpClient
      .get<any>(
        'https://api.betaseries.com/shows/member?key=38f654e19c78&token=' +
          token + '&id=1'
      )
      .subscribe((response) => {
        console.log(response.shows);
        this.series = response.shows;
      });
  }

  // getSeries() {
  //   this.httpClient
  //     .get<any>('https://api.betaseries.com/shows/list?key=38f654e19c78')
  //     .subscribe((response) => {
  //       console.log(response.shows);
  //       this.series = response.shows;
  //     });
  // }

  getGenre(genre) {
    return genre[Object.keys(genre)[0]];
  }
}
