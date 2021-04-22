import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  userSubject: BehaviorSubject<any>;
  user: Observable<any>;


  constructor(private http: HttpClient) {

    this.userSubject = new BehaviorSubject<{}>(
      JSON.parse( localStorage.getItem( 'currentUser' ) )
    );
    this.user = this.userSubject.asObservable();
   }


  updateUser(user: any): void {
    this.userSubject.next(user);
  }


  login(request: any): Observable<any> {
    return this.http.post<any[]>( 'http://localhost:8081/login' , request);
  }

  logout(): void{
    localStorage.removeItem('currentUser');
    this.updateUser(null);
  }

  public get getUserSubject(): any{
    return this.userSubject.value;
  }
}

