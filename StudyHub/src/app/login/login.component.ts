import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: '<div class="login-wrapper"><form class="login"><label class="title"><h3 class="welcome">Welcome to</h3> Company Product Name<h5 class="hint">Use your Company ID to sign in or create one now</h5> </label><div class="login-group"><div class="auth-source select"><select id="login-auth-source-1"><option>Local Users</option><option>Administrator</option></select></div><input class="username" type="text" id="login_username" placeholder="Username"><input class="password" type="password" id="login_password" placeholder="Password"><div class="checkbox"><input type="checkbox" id="rememberme"><label for="rememberme">Remember me</label></div><div class="error active">Invalid user name or password</div><button type="submit" class="btn btn-primary">NEXT</button><a href="javascript://" class="signup">Sign up for a Company ID</a></div></form></div>',
  
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
