import { Component, inject, OnInit } from '@angular/core';
import {User, UserService} from '../user-service';
import { CommonModule } from '@angular/common';
import { ImpureCurrencyPipe } from "../impure-currency.pipe";
import { PureCurrencyPipe } from "../pure-currency";
@Component({
  selector: 'app-user-list',
  standalone:true,
  imports: [CommonModule, ImpureCurrencyPipe, PureCurrencyPipe],
  template: `
              <p>
                <h2> its test</h2>
                  <h2>Balance: {{ balance | pureCurrency:currency }}</h2> 
                  <h2>Balance: {{ balance | impureCurrency:currency }}</h2> 
                  <!-- <h2>Balance: {{ balance | impureCurrency:currency}}</h2>
                  <h2>Balance: {{ 1000 | impureCurrency:'$':2 }}</h2> -->

                  <button (click)="increaseBalance()">Increase Balance</button>
                  <button (click)="changeCurrency()">Toggle Currency (₹/$)</button>
              <p>
              <div *ngFor="let user of users">
                
                    <h2>{{user.name}}</h2>
                    <h2>{{user.email}}</h2>
              </div>`
})
export class UserList implements OnInit {

  balance = 1000;
  currency = '₹';

  increaseBalance() {
    this.balance += 100;
  }

  changeCurrency() {
    this.currency = this.currency === '₹' ? '$' : '₹';
  }
  users!:User[];
  private service=inject(UserService);


  ngOnInit(): void {


    alert('111');
      this.service.getUserData().subscribe({
        next:(data)=>{
          this.users= data;
        }
      });
  }
}
