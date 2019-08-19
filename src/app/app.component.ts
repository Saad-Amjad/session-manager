import { Component } from '@angular/core';
import { SessionService } from './session-manager/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'session-manager';

  constructor(public session: SessionService) {
    this.session.setAccessToken('access_token_random');
    console.log('Access Token: ', this.session.getAccessToken());
  }
}
