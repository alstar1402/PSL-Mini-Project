import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  logout(){
    if (confirm('Are you sure you want to logout?')) {
      sessionStorage.clear()
    localStorage.clear()
    this.router.navigate(["login"])
    } else {

    }
    
  }

}

