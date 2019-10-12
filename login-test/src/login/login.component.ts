import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
declare var FB: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private cookieValue: string;

  constructor(private cookieService: CookieService) { }

  nameOfUser: any;

  ngOnInit() {

    this.cookieService.set('cookie-name', 'cookie boi');
    this.cookieValue = this.cookieService.get('cookie-name');

    (window as any).fbAsyncInit = function () {
      FB.init({
        appId: '569806407092043',
        cookie: true,
        xfbml: true,
        version: 'v3.1'
      });
      FB.AppEvents.logPageView();
    };

    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { return; }
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

  }

  submitLogin() {
    console.log("submit login to facebook");
    // FB.login();
    FB.login((response) => {
      console.log('submitLogin', response);
      if (response.authResponse) {
        //login success
        //login success code here
          console.log(response.status);
          console.log(response.authResponse.accessToken);
          FB.api(
            '/me',
            'GET',
            { "fields": "id,name,groups" },
            function (response) {
            // Insert your code here
            this.nameOfUser = response.name;
            console.log(response.name);
            console.log(this.nameOfUser);
          }
        );
          this.goHome(); 
      }
      else {
        console.log('User login failed');
      }
    });
    
  }
  goHome() {
    console.log("Going to logged in home");
  }

}
