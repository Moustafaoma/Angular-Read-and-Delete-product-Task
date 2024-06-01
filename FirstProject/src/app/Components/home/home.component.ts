import { Component } from '@angular/core';
import { Img } from 'src/app/Models/img';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  img:Img
  currentIndex: number = 0;
  interval: any;
  constructor(){
    this.img = new Img(["assets/charlesdeluvio-RfIm_uMMoxI-unsplash.jpg", "assets/chastity-cortijo-0qS1KQNyEX8-unsplash.jpg", "assets/tina-witherspoon-cGlUP8vCWBY-unsplash.jpg", "assets/roam-in-color-zzMb7jacyBc-unsplash.jpg"]);
    
  }
  play() {
    this.interval = setInterval(() => {
      this.next();
    }, 2000); // Change interval as per your requirement
  }

  stop() {
    clearInterval(this.interval);
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % 4;
  }

  previous() {
    this.currentIndex = (this.currentIndex - 1 + 4) % 4;
  }
}
