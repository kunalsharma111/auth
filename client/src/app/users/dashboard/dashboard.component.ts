import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  users: any;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getAllData();
  }

  getAllData() {
    this.userService.getAllUsers().subscribe((data: any) => {
      this.users = data.users;
    })
  }

  logout() {
    this.userService.logout();
  }

}
