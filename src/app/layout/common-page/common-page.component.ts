import { Router } from '@angular/router';
import { LoginService } from './../../views/login/login.service';
import { Component, OnInit } from '@angular/core';
import {MegaMenuItem,MenuItem} from 'primeng/api';

@Component({
  selector: 'app-common-page',
  templateUrl: './common-page.component.html',
  styleUrls: ['./common-page.component.scss'],
})
export class CommonPageComponent implements OnInit {

  items: MegaMenuItem[];

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {}

  salir(){
    this.loginService.logout();
    this.router.navigate(['login'])
  }
}
