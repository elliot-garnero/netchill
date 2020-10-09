import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  constructor(private http: HttpClient) { }

  arrayData = [];
  arrayBlocked = [];

  searchMember(event) {
    this.http.get("https://api.betaseries.com/members/search?key=38f654e19c78&limit=30&login=" + event +"%").subscribe((data: any[]) => {
      this.arrayData = data["users"];
    })
  }

  addMember(event) {
    let token = localStorage.getItem('connect');
    let params = {
      'id' : event,
      'token' : token
    };

    this.http.post("https://api.betaseries.com/friends/friend?key=38f654e19c78", params).subscribe
    ((data: any[]) => {
      let login = data["member"]["login"];
      alert("Invitation sended to " + login);
    })
  }

  blockMember(event) : void {
    let token = localStorage.getItem('connect');
    
    let params = {
      'token' : token,
      'id' : event
    };

    this.http.post("https://api.betaseries.com/friends/block?key=38f654e19c78", params).subscribe((data: any[]) => {
      let login = data["member"]["login"];
      alert(login + " has been blocked");
    })
  }

  ngOnInit(): void {
    this.http.get("https://api.betaseries.com/members/search?key=38f654e19c78&limit=30&login=%chuck%").subscribe
    ((data: any[]) => {
      this.arrayData = data["users"];
    })
  }

}
