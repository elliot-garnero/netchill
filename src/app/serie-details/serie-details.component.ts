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
  episodesSeen;
  episodesNotSeen;
  token;
  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.id = params['id'];
    });
    this.token = localStorage.getItem('connect');
  }

  ngOnInit(): void {
    this.getSerie();
    this.getEpisodes();
  }

  getSerie() {
    this.httpClient
      .get<any>(
        'https://api.betaseries.com/shows/display?key=38f654e19c78&id=' +
          this.id +
          '&access_token=' +
          this.token
      )
      .subscribe((response) => {
        this.serie = response.show;
      });
  }

  getEpisodes() {
    this.httpClient
      .get<any>(
        'https://api.betaseries.com/shows/episodes?key=38f654e19c78&id=' +
          this.id +
          '&access_token=' +
          this.token
      )
      .subscribe((response) => {
        this.episodes = response.episodes;
        console.log(this.episodes);
      });
  }

  viewedEpisode(data) {
    this.httpClient
      .post(
        'https://api.betaseries.com/episodes/watched?key=38f654e19c78&id=' +
          data.id +
          '&access_token=' +
          this.token,
        data.id
      )
      .subscribe((response) => {
        window.location.reload();
      });
  }

  commentEpisode(ep) {
    let comment = prompt('Write a comment about this episode');
    console.log(ep);
    console.log(comment);
    console.log(this.token);
    this.httpClient
      .post(
        'https://api.betaseries.com/comments/comment?key=38f654e19c78&id=' +
          ep.id +
          '&access_token=' +
          this.token,
        { text: comment }
      )
      .subscribe((response) => {
        console.log(response);
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
