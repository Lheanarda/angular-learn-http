import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEventType } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoggingInterceptorService implements HttpInterceptor{
  intercept(req:HttpRequest<any>, next:HttpHandler){
    console.log('Outgoing request');
    console.log (req.url);
    console.log(req.headers);
    return next.handle(req).pipe(tap(event=>{
      if(event.type === HttpEventType.Response){
        console.log('Incoming Response');
        console.log(event.body);
      }
    }))
  }
}
