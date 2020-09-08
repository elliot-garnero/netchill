import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-serie-details',
  templateUrl: './serie-details.component.html',
  styleUrls: ['./serie-details.component.css'],
})
export class SerieDetailsComponent implements OnInit {
  serie;
  id;
  episodes;
  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.id = params['id'];
    });
  }

  ngOnInit(): void {
    this.getSerie();
    this.getEpisodes();
  }

  getSerie() {
    this.httpClient
      .get<any>(
        'https://api.betaseries.com/shows/display?key=38f654e19c78&id=' +
          this.id
      )
      .subscribe((response) => {
        // console.log(response.show);
        this.serie = response.show;
      });
  }

  getEpisodes() {
    this.httpClient
      .get<any>(
        'https://api.betaseries.com/shows/episodes?key=38f654e19c78&id=' +
          this.id
      )
      .subscribe((response) => {
        console.log(response);
        this.episodes = response.episodes;
      });
  }

  getGenre(genre) {
    return genre[Object.keys(genre)[0]] || 'Unknown';
  }

  getRating(note) {
    if (note.total == 0) {
      return 'unknown';
    } else {
      return note.mean;
    }
  }
}
