import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router'; // it have the information about active route of user


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor( private route: ActivatedRoute) {}

  isNotErrorPage(): boolean {
    return this.route.firstChild?.routeConfig?.path !== '**';
  }
}
