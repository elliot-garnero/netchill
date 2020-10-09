import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-informations',
  templateUrl: './user-informations.component.html',
  styleUrls: ['./user-informations.component.css']
})
export class UserInformationsComponent implements OnInit {

  arrayEmail = [];
  arrayUser = [];
  arrayAvatar =  [];

  constructor(private http: HttpClient) { }

  ngOnClick() : void {

    let token = localStorage.getItem("connect");
    let id = localStorage.getItem("id");


    localStorage.removeItem("id");
    localStorage.removeItem("connect");
    alert("Disconnected !");
    window.location.href = "/series";
  }

  ngOnInit(): void {

    let token = localStorage.getItem("connect");

    this.http.get("https://api.betaseries.com/members/infos?key=38f654e19c78&token=" + token).subscribe((data: any[]) => {
      this.arrayUser.push(data['member']['login']);
      this.arrayAvatar.push(data['member']['avatar']);
    })

    this.http.get("https://api.betaseries.com/members/email?key=38f654e19c78&token=" + token).subscribe((data: any[]) => {
      this.arrayEmail.push(data['email']);
    })
  }
}