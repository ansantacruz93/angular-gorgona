import { LoginService } from './views/login/login.service';
import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isLogged: any;
  title = 'Angular Clean project';

  constructor(private primengConfig: PrimeNGConfig, private loginService: LoginService) {

    this.primengConfig.ripple = true;
    this.loginService.user.subscribe((user) => this.isLogged = user);

   }

  ngOnInit() {

  }

}

