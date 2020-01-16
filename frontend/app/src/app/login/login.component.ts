import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})

export class LoginComponent implements OnInit {
    constructor(
        private router: Router,
        private loginService: LoginService) { }
    username = ''
    password = ''
    ngOnInit() { }
    onLogin() {
        if (this.username.length == 0) {
            alert('enter username')
        } else if (this.password.length == 0) {
            alert('enter password')
        } else {
            this.loginService.login(this.username, this.password)
                .subscribe(response => {
                    if (response['status'] == 'success') {
                        alert('authenticated')
                        let key = "Login Status";
                        let val = "True"
                        localStorage.setItem(key, val)
                        this.router.navigate(['/service-provider'])
                    } else {
                        alert(response['error'])
                    }
                })
        }
    }
}