import {Component, OnInit} from '@angular/core';
import {CheckInService} from "../check-in.service";
import {BeerType} from "../beer-type";
import {ServingStyle} from "../serving-style";
import {AuthenticationService} from "../authentication.service";
import {Router} from "@angular/router";
import {UserService} from "../user.service";
import {Location} from "../location";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  beerTypes: string[] = Object.values(BeerType);
  servingStyles: string[] = Object.values(ServingStyle);
  location: string[] = Object.values(Location);
  ratings: number[] = [1, 2, 3, 4, 5];

  constructor(
      public checkInService: CheckInService,
      public userService: UserService,
      private router: Router,
      private authService:AuthenticationService) {}

  ngOnInit() {
    this.checkInService.getCheckIns();
  }

  logout(): void {
    this.authService.setIsAuthenticated(false);
    this.router.navigate(['/login']);
  }
}
