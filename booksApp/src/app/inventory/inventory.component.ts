import { Component, OnInit } from '@angular/core';
import { Book } from '../Book';
import { BooksdataService } from '../booksdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css'],
})
export class InventoryComponent implements OnInit {
  bookList!: Array<Book>;
  searchBook!:string;
  categories: Array<string>=[]

  uniquecat : Array<string>=[]

  sortBook!:String;
  constructor(
    private bookdataService: BooksdataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.bookdataService.getBooks().subscribe(
      (books) => {
        this.bookList = books;
        for(var b of this.bookList){
          console.log(b)
          this.categories.push(b.category)
        }
        this.uniquecat = [...new Set(this.categories)]

        console.log("after uniquecat "+this.uniquecat)
      },
      (err) => console.log('Error in fetching data')
    );
  }

  delete(id: number) {
    
    var r = confirm("Are you sure you want to delete this book?");
    if (r == true) {
      this.bookdataService.deleteBook(id).subscribe();
      
      window.location.reload();
      alert("Book deleted successfully")
    
    } else {
      window.location.reload();
    }
    
  }
  addnav() {
    this.router.navigate(['/addbooks']);
  }
  editnav(id: number){
    this.router.navigate(["/editbook",id])
  }
}
