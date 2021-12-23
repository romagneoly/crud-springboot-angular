import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {User} from "./user";

@Injectable()
export class UserService {

    constructor(private http: HttpClient) {
    }

    create(user: User) {
        return this.http.post<any>('http://localhost:8080/user', user)
            .toPromise()
            .then(res => <User>res)
            .then(data => {
                return data;
            });
    }

    read() {
        return this.http.get<any>('http://localhost:8080/user')
            .toPromise()
            .then(res => <User[]>res
            ).then(data => {
                return data;
            });
    }

    update(user: User) {
        return this.http.put<any>('http://localhost:8080/user', user)
            .toPromise()
            .then(res => <User>res)
            .then(data => {
                return data;
            });
    }

    delete(user: User) {
        return this.http.delete<any>('http://localhost:8080/user/' + user.id)
            .toPromise()
            .then(res => <User>res)
            .then(data => {
                return data;
            });
    }
}
