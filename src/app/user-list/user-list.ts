import { Component } from '@angular/core';
import { User } from '../user';
import { UserServ } from '../user-serv';

@Component({
  selector: 'app-user-list',
  standalone: false,
  templateUrl: './user-list.html',
  styleUrl: './user-list.css'
})
export class UserList {

  users: User[];

  constructor(private userServ: UserServ){}


  ngOnInit():void{
    this.getUsers();
  }

  private getUsers(){
    this.userServ.getUserList().subscribe(data =>{
      this.users = data;
    })
  }
}
