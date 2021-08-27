import { Component, OnInit } from '@angular/core';
import {BooksService} from "../books.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
formAdd?:FormGroup
  constructor(private bookService:BooksService,
              private fb:FormBuilder,
              private router:Router) { }

  ngOnInit(): void {
  this.formAdd=this.fb.group({
    title:[''],
    author:[''],
    description:['']
  })
  }

  add(){
  let data=this.formAdd?.value;
    this.bookService.addBook(data).subscribe(res=>{
      this.router.navigate(['/list'])
    })
  }

}
