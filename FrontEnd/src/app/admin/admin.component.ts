import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ConfirmationService, MessageService} from "primeng/api";
import {User} from "../user";
import {UserService} from "../user.service";

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css'],
    styles: [`
        :host ::ng-deep .p-dialog .product-image {
            width: 150px;
            margin: 0 auto 2rem auto;
            display: block;
        }
    `],
    providers: [MessageService, ConfirmationService]
})
export class AdminComponent implements OnInit {
    users: User[] = [];
    userDialog: boolean = false;
    submitted: boolean = false;
    user: User = {};

    constructor(private router: Router, private userService: UserService, private messageService: MessageService,
                private confirmationService: ConfirmationService) {
    }

    ngOnInit(): void {
        this.userService.read().then(data => {
            console.log('data:',data);
            this.users = data
        });
    }

    openNewUser() {
        this.user = {};
        this.userDialog = true;
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
            if (this.user && this.user.id) {
                this.userService.update(this.user).then(data => {
                    this.user = data;
                    this.userService.read().then(data => this.users = data);
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'User Updated',
                        life: 3000
                    });
                });
            } else {
                this.userService.create(this.user).then(data => {
                    this.user = data;
                    this.userService.read().then(data => this.users = data);
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'User Created',
                        life: 3000
                    });
                });
            }
            this.userDialog = false;
            this.user = {};
        }
    }

    deleteUser(user: User) {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete ' + user.userName + '?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.userService.delete(user).then(data0 => {
                    this.userService.read().then(data => this.users = data);
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'User '+user.userName+' Deleted',
                        life: 3000
                    });
                });
                this.user = {};
            }
        });
    }

    goToHome() {
        this.router.navigate(['/home']);
    }
}
