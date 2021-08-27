import { Component, OnInit } from '@angular/core';
import {BooksService} from "../books.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books:any;
  count:any;
  constructor(private bookService:BooksService) { }
  ngOnInit(): void {
    this.showAll()
  }
showAll(){
    this.bookService.getAll().subscribe(res=>{
      this.books=res
      this.count=this.books.length
      console.log(this.books)
    })
}
destroy(id:any){
    if (confirm("ban co muon xoa ko")){
      this.bookService.delete(id).subscribe(res=>{
        this.showAll()
      })
    }

}
}
