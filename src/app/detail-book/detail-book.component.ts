import { Component, OnInit } from '@angular/core';
import {BooksService} from "../books.service";
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.css']
})
export class DetailBookComponent implements OnInit {
formDetail?:FormGroup;
book:any
  constructor(private bookService:BooksService,private activeRouter:ActivatedRoute,private fb:FormBuilder) { }
  // @ts-ignore
  id=+this.activeRouter.snapshot.paramMap.get('id')
  ngOnInit(): void {
    this.bookService.showBookById(this.id).subscribe(res=>{
      this.book=res
      this.formDetail=this.fb.group({
        title:[this.book.title],
        author:[this.book.author],
        description:[this.book.description]
      })
    })

  }

}
