import { Component, OnInit } from '@angular/core';
import {BooksService} from "../books.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
formEdit?:FormGroup
  book:any;
  constructor(private bookService:BooksService,private activeRouter:ActivatedRoute,private fb:FormBuilder,private router:Router) { }
id=this.activeRouter.snapshot.paramMap.get('id')
  ngOnInit(): void {
    this.bookService.showBookById(this.id).subscribe(res=>{
      this.book=res
      this.formEdit=this.fb.group({
        title:[this.book.title],
        author:[this.book.author],
        description:[this.book.description]
      })
    })
  }
  submit(){
    let data=this.formEdit?.value;
    this.bookService.update(data,this.id).subscribe(res=>{
      this.router.navigate(['/list'])
    })
  }



}
