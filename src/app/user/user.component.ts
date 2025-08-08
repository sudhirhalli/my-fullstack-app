import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user.interface';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  template: `
   <div *ngIf="user">
      <h2>{{ user.name }}</h2>
      <p>{{ user.email }}</p>
    </div>
  `,
})
export class UserComponent implements OnInit {
  private route = inject(ActivatedRoute);
  user: User | undefined;
  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.user = data['user'];
    });
  }
}