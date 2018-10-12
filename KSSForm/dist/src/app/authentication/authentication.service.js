// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
// import { map } from 'rxjs/operators/map';
// import { HttpClient } from '@angular/common/http';
// import { Router } from '@angular/router';
// import { TokenPayload } from './tokenpayload';
// export interface UserDetails {
//   _id: string;
//   email: string;
//   name: string;
//   exp: number;
//   iat: number;
// }
// interface TokenResponse {
//   token: string;
// }
// @Injectable()
// export class AuthenticationService {
//   private token: string;
//   constructor(private http: HttpClient, private router: Router) {}
//   private saveToken(token: string): void {
//     console.log('saveToken');
//     localStorage.setItem('mean-token', token);
//     this.token = token;
//   }
//   private getToken(): string {
//     if (!this.token) {
//       this.token = localStorage.getItem('mean-token');
//     }
//     return this.token;
//   }
//   public getUserDetails(): UserDetails {
//     const token = this.getToken();
//     let payload;
//     if (token) {
//       payload = token.split('.')[1];
//       payload = window.atob(payload);
//       return JSON.parse(payload);
//     } else {
//       return null;
//     }
//   }
//   public isLoggedIn(): boolean {
//     const user = this.getUserDetails();
//     if (user) {
//       return user.exp > Date.now() / 1000;
//     } else {
//       return false;
//     }
//   }
//   private request(method: 'post'|'get', type: 'login'|'profile', user?: TokenPayload): Observable<any> {
//     let base;
//     if (method === 'post') {
//       base = this.http.post(`http://localhost:8000/api/${type}`, user);
//     } else {
//       base = this.http.get(`http://localhost:8000/api/${type}`, { headers: { Authorization: `Bearer ${this.getToken()}` }});
//     }
//     const request = base.pipe(
//       map((data: TokenResponse) => {
//         if (data.token) {
//           this.saveToken(data.token);
//         }
//         return data;
//       })
//     );
//     return request;
//   }
//   public login(user: TokenPayload): Observable<any> {
//     console.log('login');
//     return this.request('post', 'login', user);
//   }
//   public logout(): void {
//     this.token = '';
//     window.localStorage.removeItem('mean-token');
//     this.router.navigateByUrl('/home');
//   }
// } 
//# sourceMappingURL=authentication.service.js.map