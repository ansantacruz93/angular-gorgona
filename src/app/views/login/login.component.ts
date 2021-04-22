import { LoginService } from './login.service';
import { CxCheckBoxComponent } from './../componets/cx-check-box/cx-check-box.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public isHidePassword = false;
  public typePassword = 'password';
  public loginForm: FormGroup;
  public errorMessage: string;

  @ViewChild(CxCheckBoxComponent) checkBoxChild;
  isSaveUser: boolean;

  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private router: Router) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
    this.isSaveUser = false;
  }

  ngOnInit(): void {
    this.loginForm.controls.username.setValue(localStorage.getItem('userSaved'));
  }

  /**
   * Metodo encargado de gusrdar el usuario en el localStorage
   */
  private saveUser(): void {
    localStorage.setItem('userSaved', this.loginForm.value.username);
  }

  /**
   * Metodo para ocultar y mostrar contrasela
   */
  hidePassword(): void {
    this.isHidePassword = !this.isHidePassword;
    if (this.typePassword === 'password') {
      this.typePassword = 'text';
    } else {
      this.typePassword = 'password';
    }
  }

  /**
   * Metodo que recivbe valor del check-box
   */
  receiveMessage(): void {
    this.isSaveUser = this.checkBoxChild.value;
  }

  /**
   * Metodo que tendria logica para resetear pass
   */
  resetPasword(): void {
    alert('Pronto podrá recuperar la contraseña. 🔐🔐🔐');
  }

  onSubmit(): void {
    if (this.isSaveUser) {
      this.saveUser();
    }
    this.login();
  }

  private login(){
    let request = { ...this.loginForm.getRawValue() };
    this.loginService.login(request).subscribe(
      (response)=>{
        Object.defineProperty(response, 'isLogged', {value: true});
        localStorage.setItem('currentUser', JSON.stringify(response));
        this.loginService.updateUser(response);
        this.router.navigate( [ 'empleados' ] );
      },
      (error) =>{
        alert(error.error.mensaje);
      }
    );

    }
  }

