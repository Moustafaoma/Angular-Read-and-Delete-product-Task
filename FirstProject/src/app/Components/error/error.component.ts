import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute ,NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit{
  showNavbar: boolean = true;
  constructor(private router: Router) {

  }

  goBack() {
    this.router.navigate(['/']); 
  }
  ngOnInit() {
  }


}
