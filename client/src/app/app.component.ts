import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  data = {};
  constructor(private http: HttpClient)
  {
    this.http.get("https://5000-salvini126-esdockerver-u2uo0l2ojd6.ws-eu85.gitpod.io/simple_json")
    .subscribe(
      (data) => this.data = data
    )
  }
}


