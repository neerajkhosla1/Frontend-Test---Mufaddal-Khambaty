import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
declare let config: any;

@Component({
  selector: 'app-demo-dashboard',
  templateUrl: './demo-dashboard.component.html',
  styleUrls: ['./demo-dashboard.component.css']
})
export class DemoDashboardComponent implements OnInit {
  data: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    if (localStorage.getItem('bookData')){
      this.data = JSON.parse(localStorage.getItem('bookData'))
      this.data.sort((a, b) => a.name.localeCompare(b.name))
    }else{
      this.http.get(`${config.uiUrl}/assets/book-data.json`)
        .subscribe(data => {
          this.data = data;
        this.data.sort((a, b) => a.name.localeCompare(b.name))
          localStorage.setItem('bookData', JSON.stringify(this.data))
        });
    }
   
  }

}
