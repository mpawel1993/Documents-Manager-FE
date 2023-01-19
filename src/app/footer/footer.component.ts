import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { appDetailsApi } from 'src/environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  environment: BehaviorSubject<string> = new BehaviorSubject('')

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.httpClient.get(`${appDetailsApi.footerInfo}`, { responseType: 'text' })
      .subscribe(resp => { this.environment.next(resp); });
  }
}
