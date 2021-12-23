import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {User} from "../user";
import {ConfirmationService} from 'primeng/api';
import {MessageService} from 'primeng/api';
import {UserService} from "../user.service";

@Component({
    selector: 'app-supervisor',
    templateUrl: './supervisor.component.html',
    styleUrls: ['./supervisor.component.css'],
    styles: [`
        :host ::ng-deep .p-dialog .product-image {
            width: 150px;
            margin: 0 auto 2rem auto;
            display: block;
        }
    `],
    providers: [MessageService, ConfirmationService]
})
export class SupervisorComponent implements OnInit {
    users: User[] = [];
    userDialog: boolean = false;
    submitted: boolean = false;
    user: User = {};

    constructor(private router: Router, private userService: UserService, private messageService: MessageService) {
    }

    ngOnInit(): void {
        this.userService.read().then(data => this.users = data);
    }

    goToHome() {
        this.router.navigate(['/home']);
    }

    editUser(user: User) {
        this.user = user;
        this.user.birthDate = new Date(this.user.birthDate?this.user.birthDate:new Date());
        this.user.joinDate = new Date(this.user.joinDate?this.user.joinDate:new Date());
        this.userDialog = true;
    }

    hideDialog() {
        this.submitted = false;
        this.userDialog = false;
        this.user = {};
    }

    saveUser() {
        this.submitted = true;
        if (this.user?.userName?.trim()) {
            this.userService.update(this.user).then(data => {
                this.user = data;
                this.userService.read().then(data => this.users = data);
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'User Updated',
                    life: 3000
                });
                this.userDialog = false;
                this.user = {};
            });
        }
    }
}
