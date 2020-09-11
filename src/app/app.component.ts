import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PreviouslyOn';

  constructor(private http: HttpClient) {
  }

  ngOnClick() : void {

    let token = localStorage.getItem("connect");
    let id = localStorage.getItem("id");


    localStorage.removeItem("id");
    localStorage.removeItem("connect");
    alert("Disconnected !");
    window.location.href = "/series";
  }

  connection;
  token = localStorage.getItem("connect");


  ngOnInit(): void {
    if (this.token !== null) {
      this.connection = true;
    }

    else {
      this.connection = false;
    }

  }
}
