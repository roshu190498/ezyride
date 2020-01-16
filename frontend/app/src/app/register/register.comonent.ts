import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as toastr from 'toastr'
import { RegisterAdminService } from './register.service';

@Component({
    selector: 'register-admin',
    templateUrl: 'register.component.html',
    styleUrls: ['register.component.css']
})

export class RegisterAdminComponent implements OnInit {
    username = ''
    password = ''
    email = ''
    constructor(
        private router: Router,
        private regAdminService: RegisterAdminService) { }
    onRegister() {
        if (this.username.length == 0) {
            // alert('enter username')
            toastr.warning('enter valid password')
        } else if (this.email.length == 0) {
            alert('enter email')
        } else if (this.password.length == 0) {
            alert('enter password')
        } else {
            this.regAdminService
                .insertProduct(this.username, this.password, this.email)
                .subscribe(response => {
                    if (response['status'] == 'success') {
                        alert('Data Inserted successfully')
                        this.router.navigate(['/login']);
                    } else {
                        alert('Error occured !')
                    }
                })
        }
    }
    ngOnInit() {

    }
}