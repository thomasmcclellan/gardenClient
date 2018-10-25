import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms'
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  login: FormGroup
  public _user = []

  constructor(private fb: FormBuilder, private dbService: DatabaseService) { }

  ngOnInit() {
    this.login = this.fb.group({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  onLogin(): void {
    this._user.push(this.login)
    this.dbService.login(this._user[0].value).subscribe(User => this._user[0].value = User)
  }
}
