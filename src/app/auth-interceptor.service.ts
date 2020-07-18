import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEventType } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  intercept(req:HttpRequest<any>, next:HttpHandler){
    console.log('Request on the way!');
    const modifiedRequest = req.clone({headers: req.headers.append('Auth','xyz')})
    return next.handle(modifiedRequest)
  }

}
