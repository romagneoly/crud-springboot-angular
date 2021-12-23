import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {PanelModule} from 'primeng/panel';
import {HomeComponent} from './home/home.component';
import {AdminComponent} from './admin/admin.component';
import {SupervisorComponent} from './supervisor/supervisor.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import {CalendarModule} from 'primeng/calendar';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {InputNumberModule} from "primeng/inputnumber";
import {UserService} from "./user.service";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AdminComponent,
        SupervisorComponent
    ],
    imports: [
        BrowserModule,
        ButtonModule,
        CardModule,
        PanelModule,
        BrowserAnimationsModule,
        TableModule,
        ToastModule,
        ToolbarModule,
        CalendarModule,
        ConfirmDialogModule,
        DialogModule,
        FormsModule,
        InputTextModule,
        HttpClientModule,
        InputNumberModule,
        RouterModule.forRoot([
            {path: '', component: HomeComponent},
            {path: 'home', component: HomeComponent},
            {path: 'admin', component: AdminComponent},
            {path: 'supervisor', component: SupervisorComponent}
        ])
    ],
    providers: [
        ConfirmationService, UserService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
