import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from './../authentication/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})

export class UserProfileComponent implements OnInit {

  currentUser: any = {};
  
  constructor(
    public authService: AuthService,
    private actRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getUserProfile();
  }

  getUserProfile(): void {
    const id = parseInt(this.actRoute.snapshot.paramMap.get('id')!, 10);
    this.authService.getUserProfile(id).subscribe(res => this.currentUser = res.data)
  }

}
