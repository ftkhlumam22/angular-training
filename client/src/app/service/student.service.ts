import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  apiurl = 'http://localhost:3306/api/students/'

  constructor(private http:HttpClient) { 

  }

  private _refreshreq = new Subject<void>();

  get refreshreq(){
    return this._refreshreq;
  }

  GetAll():Observable<object>{
    return this.http.get(this.apiurl)
  }
  
  Post(inputstudent:any):Observable<object>{
    return this.http.post(this.apiurl,inputstudent).pipe(
      tap(() => {
        this.refreshreq.next()
      })
    )
  }

  Delete(id:String):Observable<object>{
    return this.http.delete(this.apiurl+"/"+id).pipe(
      tap(() => {
        this.refreshreq.next()
      })
    )
  }
}
