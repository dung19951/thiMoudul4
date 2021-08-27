import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BooksComponent} from "./books/books.component";
import {AddBookComponent} from "./add-book/add-book.component";
import {EditBookComponent} from "./edit-book/edit-book.component";
import {DetailBookComponent} from "./detail-book/detail-book.component";

const routes: Routes = [
  {
    path:'list',
    component:BooksComponent
  },
  {
    path:'add',
    component:AddBookComponent
  },{
  path:":id/update",
    component:EditBookComponent
  },
  {
    path:':id/detail',
    component:DetailBookComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
