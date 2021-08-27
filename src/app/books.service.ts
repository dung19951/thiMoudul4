import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  constructor(private http:HttpClient) { }
  getAll():Observable<any>{
    return this.http.get('http://localhost:3000/books')
  }

  // @ts-ignore
  addBook(data:any):Observable<any>{
     return this.http.post('http://localhost:3000/books',data)
  }
  // @ts-ignore
  showBookById(id:any):Observable<any>{
    return this.http.get('http://localhost:3000/books/'+id)
  }
  // @ts-ignore
  update(data:any,id:any):Observable<any>{
    return this.http.put("http://localhost:3000/books/"+id,data)
  }
  // @ts-ignore
  delete(id:any):Observable<any>{
    return this.http.delete('http://localhost:3000/books/'+id)
  }
}
